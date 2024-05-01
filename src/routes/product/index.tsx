import Container from "@/components/container";
import { fetchPriceById } from "@/services/api/index";
import { CartType, ItemType, OutletContextType } from "@/types/type";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const ProductPage = () => {
  const {
    items,
    isLoading,
    setIsLoading,
    error,
    setError,
    cart,
    setCart,
    wishList,
    setWishList,
  } = useOutletContext<OutletContextType>();
  const [itemPrice, setItemPrice] = useState(0);
  const idObj = useParams<{ id: string }>();
  const id = idObj.id;
  const navigate = useNavigate();

  const filteredItem = items.filter((item: ItemType) => item.id === Number(id));
  let item: ItemType | undefined;
  if (filteredItem.length > 0) {
    item = filteredItem[0];
  } else {
    if (localStorage.getItem("items") !== null) {
      const saved = localStorage.getItem("items");
      const parsedSaved = JSON.parse(saved as string);
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

  const handleOnClick = (
    arrayId: string,
    item: ItemType,
    itemPrice: number,
  ) => {
    // add default behavior
    if (arrayId === "cart") {
      const newCartItem: CartType = { ...item, price: itemPrice, quantity: 1 };
      if (cart.some((existingItem) => existingItem.id === newCartItem.id)) {
        console.log("item already in cart");
      } else {
        const newCart: CartType[] = [...cart, newCartItem];
        setCart(newCart);
        navigate("/cart");
      }
    }
    if (arrayId === "wish-list") {
      const newWishListItem: CartType = {
        ...item,
        price: itemPrice,
        quantity: 1,
      };
      if (cart.some((existingItem) => existingItem.id === newWishListItem.id)) {
        console.log("item already in wish list");
      } else {
        const newWishList: CartType[] = [...wishList, newWishListItem];
        setWishList(newWishList);
        navigate("/wish-list");
      }
    }
  };

  return (
    <Container className="flex-col">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-48 gap-4">
          <h2 className="text-2xl">Loading...</h2>
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 mx-2 text-destructive">Error: {error.message}</div>
      ) : (
        <>
          {item && (
            <>
              <h2>{item.name}</h2>
              <div className="grid w-full grid-cols-3">
                <div className="h-[400px] border">
                  <img src={item.icon} />
                </div>
                <div className="h-[400px] border">{item.examine}</div>
                {itemPrice > 0 ? (
                  <div className="h-[400px] border">
                    <div>
                      {Number(itemPrice.toFixed(0)).toLocaleString("en-US")}
                    </div>
                    <div className="flex flex-col">
                      <button
                        onClick={() => handleOnClick("cart", item, itemPrice)}
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() =>
                          handleOnClick("wish-list", item, itemPrice)
                        }
                      >
                        Add to Wish List
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] border">Price Unavailable</div>
                )}
              </div>
              {/* Reviews / Comments */}
              <div>Comments / Reviews</div>
            </>
          )}
        </>
      )}
    </Container>
  );
};
export default ProductPage;
