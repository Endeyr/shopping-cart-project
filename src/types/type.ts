export type ItemType = {
  examine: string;
  id: number;
  icon: string;
  name: string;
};
export type PriceType = {
  avgHighPrice: number | null;
  avgLowPrice: number | null;
};
export type PriceDataType = {
  [key: string]: PriceType;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};
