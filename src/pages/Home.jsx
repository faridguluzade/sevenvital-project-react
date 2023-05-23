import React from "react";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import MainHero from "../components/MainHero/MainHero";
import About from "../components/About/About";
import Future from "../components/Future/Future";
import TestimonialsSlider from "../components/TestimonialsSlider/TestimonialsSlider";
import Products from "../components/Products/Products";
import Guarantee from "../components/Guarantee/Guarantee";
import Facts from "../components/Facts/Facts";
import Benefits from "../components/Benefits/Benefits";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <MainNavigation />
      <section className="section-main-hero">
        <MainHero />
      </section>
      <section className="section-about">
        <About />
      </section>
      <section className="section-future">
        <Future />
      </section>
      <section className="section-testimonials-slider py-5">
        <TestimonialsSlider />
      </section>
      <section className="section-products">
        <Products />
      </section>
      <section className="section-guarantee">
        <Guarantee />
      </section>
      <section className="section-facts">
        <Facts />
      </section>
      <section className="section-benefits">
        <Benefits />
      </section>
      <section className="section-testimonial">
        <Testimonial />
      </section>
    </>
  );
}

export default Home;
