import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import "./index.css";
import AboutPage from "./routes/about";
import CartPage from "./routes/cart";
import CheckoutPage from "./routes/checkout";
import ConfirmationPage from "./routes/confirmation";
import ContactPage from "./routes/contact";
import ProductPage from "./routes/product";
import ProductsPage from "./routes/products";
import Root from "./routes/root";
import WishListPage from "./routes/wish-list";

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
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "products/:page/:q?/",
        element: <ProductsPage />,
      },
      {
        path: "wish-list",
        element: <WishListPage />,
      },
      {
        path: "confirmation",
        element: <ConfirmationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
