import { fetchIdByName, fetchPriceById } from "@/services/api";
import { useEffect, useState } from "react";
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
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>Navbar</div>
      <SearchBar setItemName={setItemName} />
      {itemName && (
        <div>
          {itemName} - {Number(price.toFixed(0)).toLocaleString("en-US")}gp
        </div>
      )}
    </>
  );
};
export default Navbar;
