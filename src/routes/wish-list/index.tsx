import Container from "@/components/container";
import { CartType, OutletContextType } from "@/types/type";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const WishListPage = () => {
  const { isLoading, error, wishList, setWishList, cart, setCart } =
    useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  let totalPrice = 0;
  wishList.forEach((item) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });
  // TODO if wish list empty check local storage for wish list object
  const handleDelete = (id: number) => {
    const deletedItemWishList = wishList.filter((item) => item.id !== id);
    setWishList(deletedItemWishList);
  };

  const handleAddToCart = (id: number) => {
    const newCartItem: CartType | undefined = wishList.find(
      (item) => item.id === id,
    );
    if (newCartItem) {
      const newCart: CartType[] = [...cart, { ...newCartItem, quantity: 1 }];
      setCart(newCart);
      handleDelete(id);
      navigate("/cart");
    } else {
      console.log("Item with that id not found in wish list.");
    }
  };
  // TODO style page
  return (
    <Container className="flex-col">
      <h2 className="w-full text-xl font-bold text-center capitalize">
        Wish List
      </h2>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-48 gap-4">
          <h2 className="text-2xl">Loading...</h2>
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 mx-2 text-destructive">Error: {error.message}</div>
      ) : wishList.length > 0 ? (
        <>
          <ul className="flex flex-col w-full gap-4">
            {wishList.map((item) => (
              <li key={item.id} className="border min-h-[25dvh] p-2">
                <Link to={`/product/${item.id}`}>
                  <div className="flex items-center justify-center">
                    <img src={item.icon} />
                  </div>
                </Link>
                <div className="flex flex-col justify-between col-span-2">
                  <div>Item: {item.name}</div>
                  <div>Description: {item.examine}</div>
                  <div className="flex gap-4">
                    <button onClick={() => handleAddToCart(item.id)}>
                      Add to Cart
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex items-end justify-center">
                  Price: {Number(item.price.toFixed(0)).toLocaleString("en-US")}
                  gp
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={"/products/1"}>Add items to wish list</Link>
      )}
      <div className="flex justify-end w-full px-2 mx-2">
        <span className="mr-[140px] text-lg font-bold">
          Total: {Number(totalPrice.toFixed(0)).toLocaleString("en-US")}gp
        </span>
      </div>
    </Container>
  );
};
export default WishListPage;
