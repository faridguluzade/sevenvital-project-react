import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";

import "./Testimonial.styles.scss";

const Testimonial = () => {
  return (
    <Container fluid="lg" className="testimonial">
      <Row className="align-items-center p-5">
        <Col xs={{ span: 12, order: "last" }} md={{ span: 7, order: "first" }}>
          <div className="testimonial__content-box">
            <h3 className="testimonial__user-name">Salma Seven</h3>
            <h4 className="testimonial__user-job">
              Business Owner / Botanic / CBD Lover
            </h4>
            <p className="testimonial__text">
              Vestibulum posuere felis vestibulum pharetra dapibus. Nam vitae
              sapien dapibus, condimentum ipsum non, porttitor purus. Cras et
              diam ac – nunc urna magna, porttitor eu laoreet aliquam,
              pellentesque eu velit. Suspendisse potenti! Ut elit tellus ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="testimonial__icon-box">
              <UilFacebookF size={25} />
              <UilTwitter size={25} />
              <UilLinkedinAlt size={25} />
              <UilYoutube size={25} />
            </div>
          </div>
        </Col>
        <Col xs={{ span: 12, order: "first" }} md={{ span: 5, order: "last" }}>
          <figure className="testimonial__img-box">
            <img
              src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/portr-pyfzedncdi5mkva2sqsn9g48ajryej6do53d7vhkbs.jpg"
              alt=""
              className="testimonial__photo"
            />
          </figure>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
