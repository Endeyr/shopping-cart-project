import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { fetchPriceById } from "@/services/api/index";
import { CartType, ItemType, OutletContextType } from "@/types/type";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const initialFormData: CartType = {
  examine: "",
  id: 0,
  icon: "",
  name: "",
  price: 0,
  quantity: 0,
};

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
  const [formData, setFormData] = useState<CartType>(initialFormData);
  const [isPriceLoading, setIsPriceLoading] = useState(true);
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
            setIsPriceLoading(false);
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

  const handleCartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      ...item,
      price: itemPrice,
      [e.target.name]: e.target.value,
    });
  };
  const handleCartSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.quantity <= 0) {
      throw new Error("Unable to add 0 quantity to cart.");
    }
    if (cart.some((existingItem) => existingItem.id === formData.id)) {
      console.log("item already in cart");
    } else {
      const newCart: CartType[] = [...cart, formData];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      navigate("/cart");
    }
    console.log("Form submitted:", formData);
  };
  const handleWishListOnClick = (item: ItemType, itemPrice: number) => {
    const newWishListItem: CartType = {
      ...item,
      price: itemPrice,
      quantity: 1,
    };
    if (
      wishList.some((existingItem) => existingItem.id === newWishListItem.id)
    ) {
      console.log("item already in wish list");
    } else {
      const newWishList: CartType[] = [...wishList, newWishListItem];
      setWishList(newWishList);
      localStorage.setItem("wishList", JSON.stringify(newWishList));
      navigate("/wish-list");
    }
  };
  return (
    <Container className="flex-col space-y-6 md:space-y-8">
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
              <h2 className="text-xl font-bold">{item.name}</h2>
              <div className="grid w-full grid-cols-1 lg:grid-cols-3 h-full lg:h-[30dvh] shadow-md">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    className="size-[10dvh] object-contain"
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-center h-full justify-evenly">
                  {item.examine}
                </div>
                {itemPrice > 0 ? (
                  <div className="flex flex-col items-end w-full h-full justify-evenly">
                    {!isPriceLoading && (
                      <div className="flex items-center justify-end w-full p-2">
                        <span className="font-bold">Price: </span>
                        {Number(itemPrice.toFixed(0)).toLocaleString("en-US")}gp
                      </div>
                    )}
                    <div className="flex flex-col items-center w-full">
                      <form
                        onSubmit={handleCartSubmit}
                        className="flex flex-col items-center justify-center w-full gap-2 p-2"
                      >
                        <label
                          htmlFor="quantity"
                          className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                        >
                          <span className="font-bold">Quantity</span>
                          <input
                            id="quantity"
                            className="w-full px-1 lg:w-2/3 dark:text-black"
                            name="quantity"
                            type="number"
                            value={formData?.quantity}
                            onChange={handleCartChange}
                            min="1"
                            placeholder="Pick a number..."
                          />
                        </label>
                        <div className="flex items-center justify-end w-full">
                          <Button type="submit">Add to Cart</Button>
                        </div>
                      </form>
                      <div className="flex items-center justify-end w-full p-2">
                        <Button
                          onClick={() => handleWishListOnClick(item, itemPrice)}
                        >
                          Add to Wish List
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] border">Price Unavailable</div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </Container>
  );
};
export default ProductPage;
