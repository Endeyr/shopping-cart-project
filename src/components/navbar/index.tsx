import { fetchIdByName, fetchPriceById } from "@/services/api";
import { useEffect, useState } from "react";
import { ModeToggle } from "../theme-toggle";
import SearchBar from "./search-bar";

const Navbar = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const idFetch = await fetchIdByName(itemName, true);
        const priceObj = await fetchPriceById(idFetch, isMounted);
        // check if prices are undefined or null
        const avgHighPrice = priceObj?.avgHighPrice ?? 0;
        const avgLowPrice = priceObj?.avgLowPrice ?? 0;
        // set price as avg of high and low
        const priceCalc = (avgHighPrice + avgLowPrice) / 2;
        setPrice(priceCalc);
        setError(null);
      } catch (error: unknown) {
        setPrice(0);
        setError(error as Error);
      }
    };
    if (itemName) fetchData();
    setIsLoading(false);
    return () => {
      isMounted = false; // mark component as unmounted
    };
  }, [itemName]);

  if (isLoading) {
    return <div>Loading ...{price}</div>;
  }

  if (error) {
    return <div className="mx-2 p-4">Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-4 items-center p-4 border w-full">
      <div className="w-full">Home</div>
      <SearchBar setItemName={setItemName} />
      <div className="flex w-full justify-end">
        <ModeToggle />
      </div>
      {/* {itemName && (
        <div className="flex w-full justify-end">
          {itemName} - {Number(price.toFixed(0)).toLocaleString("en-US")}gp
        </div>
      )} */}
    </div>
  );
};
export default Navbar;
