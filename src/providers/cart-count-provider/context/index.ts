import { createContext } from "react";
import { CartCountContextType } from "../types";

export const CartCountContext = createContext<CartCountContextType | undefined>(
  undefined,
);
