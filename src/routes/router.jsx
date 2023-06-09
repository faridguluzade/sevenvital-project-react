import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";

import CartSidebar from "../components/CartSidebar/CartSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartSidebar />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
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
