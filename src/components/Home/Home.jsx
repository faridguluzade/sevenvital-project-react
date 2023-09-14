import React from "react";

import MainHero from "../MainHero/MainHero";
import About from "../About/About";
import Future from "../Future/Future";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import ProductSection from "../ProductSection/ProductSection";
import Guarantee from "../Guarantee/Guarantee";
import Facts from "../Facts/Facts";
import Benefits from "../Benefits/Benefits";
import Testimonial from "../Testimonial/Testimonial";
import Accordion from "../Accordion/Accordion";
import MagazineSlider from "../MagazineSlider/MagazineSlider";
import Help from "../Help/Help";

import "./Home.styles.scss";

const Home = () => {
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
        <ProductSection />
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
        <MagazineSlider />
      </section>
      <section className="section-help">
        <Help />
      </section>
    </main>
  );
};

export default Home;
