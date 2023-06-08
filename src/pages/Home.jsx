import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import { useScroll } from "../hooks/useScroll";

function Home() {
  useScroll();
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
