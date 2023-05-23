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

      <Container className="facts">
        <Row className="align-items-center">
          <Col xs={6}>
            <ul className="facts__list">
              <li className="facts__item">
                <span>1</span> CBD is safe and non-addictive;
              </li>
              <li className="facts__item">
                <span>2</span> CBD works well for anxiety & mental disorders;
              </li>
              <li className="facts__item">
                <span>3</span> CBD may benefit heart health;
              </li>
              <li className="facts__item">
                <span>4</span> CBD may alleviate certain cancer-related
                symptoms;
              </li>
              <li className="facts__item">
                <span>5</span> CBD could be an effective treatment for COVID-19;
              </li>
              <li className="facts__item">
                <span>6</span> You can't overdose on CBD;
              </li>
              <li className="facts__item">
                <span>7</span> CBD will not get you high, but it might make you
                feel good.
              </li>
            </ul>
          </Col>
          <Col xs={6}>
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
