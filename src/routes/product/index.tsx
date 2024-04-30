import Container from "@/components/container";
import { fetchPriceById } from "@/services/api/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const [itemPrice, setItemPrice] = useState(0);
  const { id, name } = useParams<{ id: string; name: string }>();
  const [isLoadingItem, setIsLoadingItem] = useState(true);
  const [itemError, setItemError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchItemData = async () => {
      try {
        if (id) {
          const priceObj = await fetchPriceById(id, isMounted);
          // check if prices are undefined or null
          const avgHighPrice = priceObj?.avgHighPrice ?? 0;
          const avgLowPrice = priceObj?.avgLowPrice ?? 0;
          // set price as avg of high and low
          const priceCalc = (avgHighPrice + avgLowPrice) / 2;
          setItemPrice(priceCalc);
          setItemError(null);
        } else {
          throw new Error("id undefined");
        }
      } catch (error: unknown) {
        setItemPrice(0);
        setItemError(error as Error);
      } finally {
        setIsLoadingItem(false);
      }
    };
    fetchItemData();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Container className="flex-col">
      {isLoadingItem ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : itemError ? (
        <div className="p-4 mx-2 text-destructive">
          Error: {itemError.message}
        </div>
      ) : (
        <>
          {/* Item */}
          <h2>{name}</h2>
          <div className="grid w-full grid-cols-3">
            <div className="h-[400px] border">Image</div>
            <div className="h-[400px] border">Description</div>
            <div className="h-[400px] border">
              {Number(itemPrice.toFixed(0)).toLocaleString("en-US")}gp + Add to
              Cart Buttons
            </div>
          </div>
          {/* Reviews / Comments */}
          <div>Comments / Reviews</div>
        </>
      )}
    </Container>
  );
};
export default ProductPage;
