import Container from "@/components/container";
import { OutletContextType } from "@/types/type";
import { Link, useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { isLoading, error, cart } = useOutletContext<OutletContextType>();

  let totalPrice = 0;
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });

  return (
    <Container className="flex-col">
      <h2 className="w-full text-xl font-bold text-center capitalize">Cart</h2>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-48 gap-4">
          <h2 className="text-2xl">Loading...</h2>
          <div className="w-10 h-10 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 mx-2 text-destructive">Error: {error.message}</div>
      ) : (
        <>
          <ul className="flex flex-col w-full gap-4">
            {cart.map((item) => (
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
                    <button>Qty</button>
                    <button>Delete</button>
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
      )}
      <div className="flex justify-end w-full px-2 mx-2">
        <div className="flex gap-4">
          <div>
            <Link to={"/checkout"}>Proceed to checkout</Link>
          </div>
          <div className="mr-[140px] text-lg font-bold">
            Total: {Number(totalPrice.toFixed(0)).toLocaleString("en-US")}gp
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CartPage;
