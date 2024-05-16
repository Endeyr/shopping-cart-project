import { useEffect, useState } from "react";
import { CartCountContext } from "./context";
import { CartCountProviderProps } from "./types";

export const CartCountProvider: React.FC<CartCountProviderProps> = ({
  children,
}) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedStoredCart = JSON.parse(storedCart);
        setCartCount(parsedStoredCart.length);
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <CartCountContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
};
