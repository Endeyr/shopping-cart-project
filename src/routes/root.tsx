import Layout from "@/components/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { ItemType } from "@/types/type";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [items, setItems] = useState<ItemType[]>([]);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Outlet context={[items, setItems]} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
