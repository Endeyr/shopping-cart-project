import { ReactNode, SetStateAction } from "react";

export type CartCountContextType = {
  cartCount: number;
  setCartCount: React.Dispatch<SetStateAction<number>>;
};

export type CartCountProviderProps = {
  children: ReactNode;
};
