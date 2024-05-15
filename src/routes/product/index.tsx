import Container from "@/components/container";
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
  // TODO style page
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
                  {/* TODO optimize image */}
                  <img src={item.icon} />
                </div>
                <div className="h-[400px] border">{item.examine}</div>
                {itemPrice > 0 ? (
                  // TODO show a loader or spinner while price is loading
                  <div className="h-[400px] border">
                    <div>
                      Price:
                      {Number(itemPrice.toFixed(0)).toLocaleString("en-US")}gp
                    </div>
                    <div className="flex flex-col">
                      <form onSubmit={handleCartSubmit}>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="number"
                          value={formData?.quantity}
                          onChange={handleCartChange}
                          min="1"
                          placeholder="Pick a number..."
                        />
                        <button type="submit">Add to Cart</button>
                      </form>
                      <div>
                        <button
                          onClick={() => handleWishListOnClick(item, itemPrice)}
                        >
                          Add to Wish List
                        </button>
                      </div>
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
