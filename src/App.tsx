
import Layout from "./components/layout";
import { ThemeProvider } from "./providers/theme-provider";
import Home from "./components/home";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
