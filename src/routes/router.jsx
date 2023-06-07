import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import AccountPage from "../pages/AccountPage";
import MagazinePage from "../pages/MagazinePage";

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
        path: "/account",
        element: <AccountPage />,
      },

      {
        path: "/magazine",
        element: <MagazinePage />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
