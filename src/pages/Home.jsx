import React from "react";

import MainLayout from "../components/MainLayout/MainLayout";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <MainNavigation />
      <MainLayout />
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
