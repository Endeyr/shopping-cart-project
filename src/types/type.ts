import { Dispatch, SetStateAction } from "react";

export type ItemType = {
  examine: string;
  id: number;
  icon: string;
  name: string;
};
export type CartType = ItemType & {
  price: number;
  quantity: number;
};
export type PriceType = {
  high: number | null;
  low: number | null;
};
export type PriceDataType = {
  [key: string]: PriceType;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};
export type OutletContextType = {
  items: ItemType[];
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  wishList: CartType[];
  setWishList: Dispatch<SetStateAction<CartType[]>>;
  cart: CartType[];
  setCart: Dispatch<SetStateAction<CartType[]>>;
};
