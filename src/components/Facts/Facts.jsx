import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../UI/SectionHeader/SectionHeader";

import "./Facts.styles.scss";

const Facts = () => {
  return (
    <>
      <SectionHeader title="7 Facts About CBD Products" />

      <Container fluid="lg" className="facts p-sm-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="p-5">
            <ul className="facts__list">
              <li className="facts__item">
                <span>1</span> <p>CBD is safe and non-addictive;</p>
              </li>
              <li className="facts__item">
                <span>2</span>{" "}
                <p>CBD works well for anxiety & mental disorders;</p>
              </li>
              <li className="facts__item">
                <span>3</span> <p> CBD may benefit heart health;</p>
              </li>
              <li className="facts__item">
                <span>4</span>{" "}
                <p> CBD may alleviate certain cancer-related symptoms;</p>
              </li>
              <li className="facts__item">
                <span>5</span>{" "}
                <p>CBD could be an effective treatment for COVID-19;</p>
              </li>
              <li className="facts__item">
                <span>6</span> <p>You can't overdose on CBD;</p>
              </li>
              <li className="facts__item">
                <span>7</span>{" "}
                <p>
                  CBD will not get you high, but it might make you feel good.
                </p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="p-3">
            <figure className="facts__pictures">
              <img
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vprod012-pyh7n9v838pjfniees5e6zi4oelll5uyc8mhznopwo.jpg"
                alt=""
                className="facts__main-photo"
              />
              <img
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vim0099-pykhxqqgtc8ch7uiy10t0vjy8z5f3konhp9qlzm2aw.jpg"
                alt=""
                className="facts__secondary-photo"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Facts;
