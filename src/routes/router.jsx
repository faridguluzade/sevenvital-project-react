import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
