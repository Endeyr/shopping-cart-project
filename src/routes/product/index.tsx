import Container from "@/components/container";
import { fetchPriceById } from "@/services/api/index";
import { ItemType, OutletContextType } from "@/types/type";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
const ProductPage = () => {
  const { items, isLoading, setIsLoading, error, setError } =
    useOutletContext<OutletContextType>();
  const [itemPrice, setItemPrice] = useState(0);
  const idObj = useParams();
  const id = idObj.id;

  const filteredItem = items.filter((item: ItemType) => item.id === Number(id));
  let item;
  if (filteredItem !== undefined) {
    item = filteredItem[0];
  } else {
    const saved = localStorage.getItem("items");
    if (saved) {
      const parsedSaved = JSON.parse(saved);
      const filteredSaved = parsedSaved.filter(
        (item: ItemType) => item.id === Number(id),
      );
      item = filteredSaved[0];
    }
  }

  useEffect(() => {
    let isMounted = true;
    const fetchItemData = async () => {
      try {
        if (id === undefined) {
          throw new Error("Error: Id not found in items");
        } else {
          const price = await fetchPriceById(id, isMounted);
          if (price !== undefined) {
            setItemPrice(price);
          }
        }
      } catch (error: unknown) {
        setItemPrice(0);
        setError(error as Error);
      } finally {
        setError(null);
        setIsLoading(false);
      }
    };
    if (isMounted) fetchItemData();
    return () => {
      isMounted = false;
    };
  }, [id, setError, setIsLoading]);

  return (
    <Container className="flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 mx-2 text-destructive">Error: {error.message}</div>
      ) : (
        <>
          <h2>{item.name}</h2>
          <div className="grid w-full grid-cols-3">
            <div className="h-[400px] border">
              <img src={item.icon} />
            </div>
            <div className="h-[400px] border">{item.examine}</div>
            {itemPrice > 0 ? (
              <div className="h-[400px] border">
                {Number(itemPrice.toFixed(0)).toLocaleString("en-US")}gp + Add
                to Cart Buttons
              </div>
            ) : (
              <div className="h-[400px] border">Price Unavailable</div>
            )}
          </div>
          {/* Reviews / Comments */}
          <div>Comments / Reviews</div>
        </>
      )}
    </Container>
  );
};
export default ProductPage;
