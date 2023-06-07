import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
