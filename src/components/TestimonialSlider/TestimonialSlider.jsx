import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { useTestimonials } from "../../hooks/useTestimonials";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const TestimonialSlider = () => {
  const { testimonials } = useTestimonials();

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
        {testimonials.map((testimonial) => (
          <Col xs={12} md={6} xl={4} key={testimonial.id}>
            <SwiperSlide>
              <TestimonialItem {...testimonial} />
            </SwiperSlide>
          </Col>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSlider;
