import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../pages/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import MagazineDetailPage from "../pages/MagazineDetailPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:shopId",
        element: <ProductDetailPage />,
      },
      {
        path: "/shop/cart",
        element: <CartPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/magazine",
        element: <MagazinePage />,
      },
      {
        path: "/magazine/:magazineId",
        element: <MagazineDetailPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
