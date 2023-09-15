import { Outlet } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  useScroll();

  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: "70rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
