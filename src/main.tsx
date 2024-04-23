import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Services from "./components/services";
import ErrorPage from "./error-page";
import "./index.css";
import About from "./routes/about";
import Cart from "./routes/cart";
import Checkout from "./routes/checkout";
import Contact from "./routes/contact";
import Product from "./routes/product";
import Products from "./routes/products";
import Root from "./routes/root";
import WishList from "./routes/wish-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
