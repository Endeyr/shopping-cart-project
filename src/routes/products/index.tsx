import Container from "@/components/container";
import Pagination from "@/components/pagination";
import { fetchAllItems } from "@/services/api/index";
import { ItemType } from "@/types/type";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

const ProductsPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [itemsLoading, setItemsLoading] = useState(true);
  const [itemsError, setItemsError] = useState<Error | null>(null);
  // Pagination using React Router
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    let isMounted = true;
    const fetchItemsData = async () => {
      try {
        const itemsFetch = await fetchAllItems(isMounted);
        if (itemsFetch !== undefined) {
          setItems(itemsFetch);
          setTotalPages(Math.ceil(itemsFetch.length / ITEMS_PER_PAGE));
        }
        setItemsError(null);
      } catch (error: unknown) {
        setItemsError(error as Error);
      } finally {
        setItemsLoading(false);
      }
    };
    fetchItemsData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (page) {
      const pageNumber = parseInt(page) ?? 1;
      if (pageNumber !== currentPage) {
        setCurrentPage(pageNumber);
      }
    }
  }, [page, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/products/${pageNumber}`);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const paginatedItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="grid grid-cols-5">
      {/* Sidebar */}
      <div className="w-full col-span-1">Sidebar</div>
      {/* Main */}
      <div className="flex flex-col w-full h-full col-span-4 gap-2">
        <h2>Products</h2>
        {itemsLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
          </div>
        ) : itemsError ? (
          <div className="p-4 mx-2">Error: {itemsError.message}</div>
        ) : (
          <>
            <div className="grid w-full grid-cols-1 col-span-4 md:grid-cols-2 lg:grid-cols-4">
              {paginatedItems.map((item) => (
                <div key={item.id} className="border min-h-[20dvh]">
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </Container>
  );
};
export default ProductsPage;
