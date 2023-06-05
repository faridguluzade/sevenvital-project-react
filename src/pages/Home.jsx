import React from "react";

import MainLayout from "../components/MainLayout/MainLayout";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

import MobileNavigation from "../components/MobileNavigation/MobileNavigation";

function Home() {
  return (
    <>
      <MainNavigation />
      {/* <MobileNavigation /> */}

      <MainLayout />
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
