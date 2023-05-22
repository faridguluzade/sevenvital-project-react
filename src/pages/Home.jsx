import React from "react";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import MainHero from "../components/MainHero/MainHero";
import About from "../components/About/About";
import Future from "../components/Future/Future";
import Testimonials from "../components/Testimonials/Testimonials";
import Products from "../components/Products/Products";
import Guarantee from "../components/Guarantee/Guarantee";

function Home() {
  return (
    <>
      <MainNavigation />
      <section className="section-main-hero" id="main-hero">
        <MainHero />
      </section>
      <section className="section-about">
        <About />
      </section>
      <section className="section-future">
        <Future />
      </section>
      <section className="section-testimonials py-5">
        <Testimonials />
      </section>
      <section className="section-products">
        <Products />
      </section>
      <section className="section-guarantee">
        <Guarantee />
      </section>
    </>
  );
}

export default Home;
