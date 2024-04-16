import { useEffect, useState } from "react";
import Layout from "./components/layout";
import { fetchIdByName, fetchPriceById } from "./services/api";

function App() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      // user Input will be updated by what the user searched
      const userInput = "Abyssal whip";
      if (userInput) {
        setName(userInput);
        setPrice(0);
      }
      try {
        const idFetch = await fetchIdByName(userInput, true);
        const priceObj = await fetchPriceById(idFetch, isMounted);
        if (priceObj?.avgHighPrice && priceObj?.avgLowPrice) {
          const priceCalc =
            (priceObj?.avgHighPrice + priceObj?.avgLowPrice) / 2;
          setPrice(priceCalc);
        }
        setError(null);
      } catch (error: unknown) {
        setError(error as Error);
      }
    };
    fetchData();
    setIsLoading(false);
    return () => {
      isMounted = false; // mark component as unmounted
    };
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <>
      <Layout>
        <div>Home</div>
        <form>
          <label>
            Name:
            <input />
          </label>
          <button>Search</button>
        </form>
        {name && (
          <div>
            <div>{error?.message} </div>
            <h2>{name}</h2>
            <p>
              {price.toLocaleString("en-US")}
              gp
            </p>
          </div>
        )}
      </Layout>
    </>
  );
}

export default App;
