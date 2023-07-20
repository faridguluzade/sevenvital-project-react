import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "../UI/Button/Button";

import { DUMMY_TESTIMONIALS } from "../../constants";

import "./TestimonialSlider.styles.scss";

const TestimonialSlider = () => {
  return (
    <Container fluid className="py-5">
      <Swiper
        loop={true}
        breakpoints={{
          750: {
            slidesPerView: 1,
          },
          830: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {DUMMY_TESTIMONIALS.map(({ id, userName, imgUrl, text, link }) => (
          <Col xs={12} md={6} xl={4} key={id}>
            <SwiperSlide>
              <figure className="testimonial-slider">
                <figcaption className="testimonial-slider__user">
                  <img
                    className="testimonial-slider__photo"
                    src={imgUrl}
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial-slider__user-name">{userName}</h3>
                <blockquote className="testimonial-slider__text">
                  "{text}"
                </blockquote>
                <Button filled={true} className="testimonial-slider__link">
                  {link}
                </Button>
              </figure>
            </SwiperSlide>
          </Col>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSlider;

{
  /* 
          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales0041.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Miriam J. Anderson</h3>
                <blockquote className="testimonial__text">
                  "Pellentesque condimentum velit tortor. Cras at ornare ex,
                  quis fringilla tortor. Ut tempus metus dui, non tristique
                  turpis euismod sed. Nunc fermentum quam et tortor euismod, vel
                  maximus metus tristique."
                </blockquote>
                <Link className="testimonial__link">mjanderson</Link>
              </figure>
            </SwiperSlide>
          </div>

          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales0062.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Alexa Blackwod</h3>
                <blockquote className="testimonial__text">
                  "I am impressed! Cras at ornare ex, quis fringilla tortor quam
                  et tortor euismod, vel maximus metus tristique. Highly
                  recommend!"
                </blockquote>
                <Link className="testimonial__link">alexabw</Link>
              </figure>
            </SwiperSlide>
          </div>
          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales00202.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Boris Brown</h3>
                <blockquote className="testimonial__text">
                  "Super fun quam et tortor euismod, vel ligula, sit amet
                  lacinia justo cursus ac. Nulla sed elit faucibus, auctor
                  mauris ac, fermentum velit. Quisque eget odio felis. Thanx!"
                </blockquote>
                <Link className="testimonial__link">bb_brown</Link>
              </figure>
            </SwiperSlide>
          </div>

          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales00222.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Tiffany Swift</h3>
                <blockquote className="testimonial__text">
                  "Awesome! +10K visitors at ornare ex, quis fringilla! Quisque
                  eget odio felis. Suspendisse quis nulla tincidunt, cursus
                  tellus condimentum, consequat sapien at ornare ex, quis
                  fringilla tortor."
                </blockquote>
                <Link className="testimonial__link">tiffany_swift</Link>
              </figure>
            </SwiperSlide>
          </div>
          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales00967.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Jessica Washington</h3>
                <blockquote className="testimonial__text">
                  "Cool! Lorem quis fringilla tortor, auctor mauris fermentum
                  velit. Quisque eget - odio tincidunt, cursus tellus
                  condimentum quis fringilla tortor."
                </blockquote>
                <Link className="testimonial__link">j_washington</Link>
              </figure>
            </SwiperSlide>
          </div>
          <div className="col-4">
            <SwiperSlide>
              <figure className="testimonial">
                <figcaption className="testimonial__user">
                  <img
                    className="testimonial__photo"
                    src="https://the7.io/cbd/wp-content/uploads/sites/104/2021/06/sales0060.jpg"
                    alt=""
                  />
                </figcaption>
                <h3 className="testimonial__user-name">Anna White</h3>
                <blockquote className="testimonial__text">
                  "Ut tempus metus dui, non tristique turpis euismod sed. Nunc
                  fermentum quam et tortor euismod, vel maximus metus tristique.
                  Cool!"
                </blockquote>
                <Link className="testimonial__link">j_washington</Link>
              </figure>
            </SwiperSlide>
          </div> */
}
