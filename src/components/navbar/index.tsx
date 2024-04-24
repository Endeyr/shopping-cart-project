import { fetchIdByName, fetchPriceById } from "@/services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../theme-toggle";
import NavLinks from "./nav-links";
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
        const idFetch = await fetchIdByName(itemName, isMounted);
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
    <header className="sticky top-0 z-50 w-full bg-os_header_lite dark:bg-os_header_dark border-b hidden md:block">
      <div className="grid grid-cols-5 items-center p-4 h-16">
        <Link to={"/"} className="w-full">
          Logo
        </Link>
        <SearchBar setItemName={setItemName} />
        <div className="flex items-center space-x-1 w-full justify-between mx-4 gap-4 col-span-2">
          <ModeToggle />
          <NavLinks />
        </div>
        {/* {itemName && (
        <div className="flex w-full justify-end">
          {itemName} - {Number(price.toFixed(0)).toLocaleString("en-US")}gp
        </div>
      )} */}
      </div>
    </header>
  );
};
export default Navbar;
