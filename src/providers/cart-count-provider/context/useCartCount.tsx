import { useContext } from "react";
import { CartCountContext } from ".";

export const useCartCount = () => {
  const context = useContext(CartCountContext);
  if (!context) {
    throw new Error("useCartCount must be used within a CartCountProvider");
  }
  return context;
};
