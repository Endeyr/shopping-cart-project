import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { useCartCount } from "@/providers/cart-count-provider/context/useCartCount";
import { OutletContextType } from "@/types/type";
import { Link, useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { isLoading, error, cart, setCart } =
    useOutletContext<OutletContextType>();
  const { cartCount, setCartCount } = useCartCount();
  let totalPrice = 0;
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });
  const handleDelete = (id: number) => {
    const deletedItemCart = cart.filter((item) => item.id !== id);
    setCart(deletedItemCart);
    localStorage.setItem("cart", JSON.stringify(deletedItemCart));
    if (deletedItemCart.length !== cartCount) {
      setCartCount(deletedItemCart.length);
    }
  };
  const handleQtyChange = (id: number, change: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = Number(item.quantity) + Number(change);
          if (newQuantity <= 0) {
            handleDelete(id);
          } else {
            return {
              ...item,
              quantity: newQuantity,
            };
          }
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    <Container className="flex-col space-y-8 md:space-y-10">
      <h2 className="w-full text-xl font-bold text-center capitalize">Cart</h2>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-48 gap-4">
          <h2 className="text-2xl">Loading...</h2>
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 mx-2 text-destructive">Error: {error.message}</div>
      ) : cart.length > 0 ? (
        <>
          <ul className="flex flex-col w-full gap-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="min-h-[25dvh] p-2 shadow-md grid grid-cols-2"
              >
                <Link to={`/product/${item.id}`}>
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      className="size-[10dvh] object-contain"
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div>
                  <div className="flex flex-col justify-between col-span-2 gap-2">
                    <div className="w-full">
                      <span className="mr-2 font-bold">Item: </span>
                      {item.name}
                    </div>
                    <div className="w-full">
                      <span className="mr-2 font-bold">Description: </span>
                      {item.examine}
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-4">
                      <div className="flex items-center justify-center h-full gap-4">
                        <Button onClick={() => handleQtyChange(item.id, -1)}>
                          -
                        </Button>
                        <div className="w-full">
                          <span className="mr-2 font-bold">Qty: </span>
                          {item.quantity}
                        </div>
                        <Button onClick={() => handleQtyChange(item.id, 1)}>
                          +
                        </Button>
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-center mt-2">
                    <span className="mr-2 font-bold">Price: </span>
                    {Number(item.price.toFixed(0)).toLocaleString("en-US")}
                    gp
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          className="border w-full shadow-md  min-h-[25dvh] p-2 flex flex-col justify-center items-center"
          to={"/products/1"}
        >
          Add items to cart
        </Link>
      )}
      <div className="flex items-center justify-end w-full gap-4 px-2 mx-2">
        <div className="flex items-center justify-center">
          <div className="text-lg">
            <span className="mr-2 text-lg font-bold">Total: </span>
            {Number(totalPrice.toFixed(0)).toLocaleString("en-US")}gp
          </div>
        </div>
        <Button>
          <Link to={"/checkout"}>Proceed to checkout</Link>
        </Button>
      </div>
    </Container>
  );
};
export default CartPage;
