import MainHero from "../../components/MainHero/MainHero";
import About from "../../components/About/About";
import Future from "../../components/Future/Future";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import ProductSection from "../../components/ProductSection/ProductSection";
import Guarantee from "../../components/Guarantee/Guarantee";
import Facts from "../../components/Facts/Facts";
import Benefits from "../../components/Benefits/Benefits";
import Testimonial from "../../components/Testimonial/Testimonial";
import Accordion from "../../components/Accordion/Accordion";
import MagazineSlider from "../../components/MagazineSlider/MagazineSlider";
import Help from "../../components/Help/Help";

import "./Home.styles.scss";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
