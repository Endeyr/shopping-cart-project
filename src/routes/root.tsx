import Layout from "@/components/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  );
}
