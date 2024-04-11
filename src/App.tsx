import { useEffect, useState } from "react";
import Layout from "./components/layout";
import { fetchNameById, fetchPriceById } from "./services/api";

function App() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const priceObj = await fetchPriceById("4151", isMounted);
      if (priceObj?.avgHighPrice && priceObj?.avgLowPrice) {
        const priceCalc = (priceObj?.avgHighPrice + priceObj?.avgLowPrice) / 2;
        setPrice(priceCalc);
      }
      const nameFetch = await fetchNameById("4151", true);
      if (nameFetch) {
        setName(nameFetch);
      }
    };
    fetchData();
    return () => {
      isMounted = false; // mark component as unmounted
    };
  }, []);

  return (
    <>
      <Layout>
        <div>Home</div>
        <div>
          <h2>{name}</h2>
          <p>{price.toFixed(0)}gp</p>
        </div>
      </Layout>
    </>
  );
}

export default App;
