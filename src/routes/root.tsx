import Layout from "@/components/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { fetchAllItems } from "@/services/api";
import { ItemType } from "@/types/type";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const ITEMS_PER_PAGE = 12;

export default function Root() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    let isMounted = true;
    const fetchItemsData = async () => {
      try {
        const itemsFetch = await fetchAllItems(isMounted);
        if (itemsFetch !== undefined) {
          setItems(itemsFetch);
          localStorage.setItem("items", JSON.stringify(itemsFetch));
          setTotalPages(Math.ceil(itemsFetch.length / ITEMS_PER_PAGE));
        } else {
          throw new Error("Error: items fetch failed");
        }
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setError(null);
        setIsLoading(false);
      }
    };
    if (isMounted) fetchItemsData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Outlet
            context={{
              items,
              setItems,
              isLoading,
              setIsLoading,
              error,
              setError,
              currentPage,
              setCurrentPage,
              totalPages,
              setTotalPages,
            }}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}
