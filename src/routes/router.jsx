import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../components/MainLayout/MainLayout";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import MagazineDetailPage from "../pages/MagazineDetailPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "/shop",
        element: <ProductDetailPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/magazine",
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
