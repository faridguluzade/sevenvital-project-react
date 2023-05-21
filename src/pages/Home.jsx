import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import MainHero from "../components/MainHero/MainHero";
import About from "../components/About/About";
import Future from "../components/Future/Future";
import Testimonials from "../components/Testimonials/Testimonials";

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
    </>
  );
}

export default Home;
