import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../pages/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SpinnerFullPage from "../components/UI/SpinnerFullPage/SpinnerFullPage";

// const Home = lazy(() => import("../pages/Home/Home"));
// const AccountPage = lazy(() => import("../pages/AccountPage"));
// const MagazinePage = lazy(() => import("../pages/MagazinePage"));
// const ShopPage = lazy(() => import("../pages/ShopPage"));
// const ContactPage = lazy(() => import("../pages/ContactPage"));
// const CartPage = lazy(() => import("../pages/CartPage"));
// const MagazineDetailPage = lazy(() => import("../pages/MagazineDetailPage"));
// const ProductDetailPage = lazy(() =>
//   import("../pages/ProductDetailPage/ProductDetailPage")
// );

import Home from "../pages/Home/Home";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import MagazineDetailPage from "../pages/MagazineDetailPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

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
  return (
    // <Suspense fallback={<SpinnerFullPage />}>
    <RouterProvider router={router} />

    // </Suspense>
  );
};

export default Root;
