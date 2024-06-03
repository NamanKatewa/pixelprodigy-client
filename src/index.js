import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Policy from "./Pages/Policy";
import Tos from "./Pages/Tos";
import Wishlist from "./Pages/Wishlist";
import Order from "./Pages/Order";
import PaymentPolicy from "./Pages/PaymentPolicy";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { ShowCartProvider } from "./context/showCartContext";
import { WishlistProvider } from "./context/wishlistContext";
import { Toaster } from "react-hot-toast";
import Faq from "./Pages/Faq";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/search/",
        element: <Search />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/privacypolicy",
        element: <Policy />,
      },
      {
        path: "/tos",
        element: <Tos />,
      },
      {
        path: "/policy",
        element: <PaymentPolicy />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

root.render(
  <ShowCartProvider>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </ShowCartProvider>
);
