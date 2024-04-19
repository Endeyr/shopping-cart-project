import { useEffect, useState } from "react";
import Layout from "./components/layout";
import { ThemeProvider } from "./providers/theme-provider";
import { fetchIdByName, fetchPriceById } from "./services/api";

function App() {
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState("");
  const [userInput, setUserInput] = useState("");
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
    fetchData();
    setIsLoading(false);
    return () => {
      isMounted = false; // mark component as unmounted
    };
  }, [itemName]);
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.currentTarget;
    setUserInput(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemName(userInput);
  };
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <div>Home</div>
        <form id="searchForm" onSubmit={handleSubmit}>
          <label htmlFor="userInput">
            Name:
            <input
              id="userInput"
              name="userInput"
              type="text"
              value={userInput}
              onChange={handleChange}
            />
          </label>
          <button>Search</button>
        </form>
        {itemName && (
          <div>
            <div>{error?.message} </div>
            <h2>{itemName}</h2>
            {price > 0 && (
              <p>
                {price.toLocaleString("en-US")}
                gp
              </p>
            )}
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
