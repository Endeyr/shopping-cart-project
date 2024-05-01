import Container from "@/components/container";
import Pagination from "@/components/pagination";
import { OutletContextType } from "@/types/type";
import { useEffect } from "react";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { ITEMS_PER_PAGE } from "../root";

const ProductsPage = () => {
  const { items, currentPage, setCurrentPage, isLoading, error, totalPages } =
    useOutletContext<OutletContextType>();

  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (page) {
        const pageNumber = parseInt(page) || 1;
        if (pageNumber !== currentPage) {
          setCurrentPage(pageNumber);
        }
      }
    }
    return () => {
      isMounted = false;
    };
  }, [page, currentPage, setCurrentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/products/${pageNumber}`);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const paginatedItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="grid grid-cols-4">
      <div className="flex flex-col w-full h-full col-span-4 gap-2">
        <h2 className="flex items-center justify-center w-full text-xl font-bold">
          Products
        </h2>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-48 gap-4">
            <h2 className="text-2xl">Loading...</h2>
            <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
          </div>
        ) : error ? (
          <div className="p-4 mx-2 text-destructive">
            Error: {error.message}
          </div>
        ) : (
          <>
            <div className="grid w-full grid-cols-1 col-span-4 md:grid-cols-2 lg:grid-cols-4">
              {paginatedItems.map((item) => (
                <div key={item.id} className="border min-h-[25dvh] p-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="flex flex-col justify-between w-full h-full"
                  >
                    <div>
                      <span className="font-bold">Name: </span>
                      {item.name}
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={25}
                        height={25}
                        className="object-scale-down"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      <span className="font-bold">Description: </span>
                      {item.examine}
                    </p>
                  </Link>
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
