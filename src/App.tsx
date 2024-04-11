import { useEffect } from "react";
import Layout from "./components/layout";
import { fetchNameById, fetchPriceById } from "./services/api";

function App() {
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const priceObj = await fetchPriceById("4151", isMounted);
      console.log(priceObj);
      const name = await fetchNameById("4151", true);
      console.log(name);
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
      </Layout>
    </>
  );
}

export default App;
