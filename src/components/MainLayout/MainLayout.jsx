import React from "react";

import MainHero from "../MainHero/MainHero";
import About from "../About/About";
import Future from "../Future/Future";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import Products from "../Products/Products";
import Guarantee from "../Guarantee/Guarantee";
import Facts from "../Facts/Facts";
import Benefits from "../Benefits/Benefits";
import Testimonial from "../Testimonial/Testimonial";
import Accordion from "../Accordion/Accordion";
import Magazine from "../Magazine/Magazine";
import Help from "../Help/Help";

import "./MainLayout.styles.scss";

const MainLayout = () => {
  return (
    <main>
      <section className="section-main-hero">
        <MainHero />
      </section>
      <section className="section-about">
        <About />
      </section>
      <section className="section-future">
        <Future />
      </section>
      <section className="section-testimonial-slider">
        <TestimonialSlider />
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
      <section className="section-accordion">
        <Accordion />
      </section>
      <section className="section-magazine">
        <Magazine />
      </section>
      <section className="section-help">
        <Help />
      </section>
    </main>
  );
};

export default MainLayout;
