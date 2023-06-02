import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../UI/SectionHeader/SectionHeader";
import { UisCheckCircle } from "@iconscout/react-unicons-solid";
import "./About.styles.scss";

const About = () => {
  return (
    <>
      <SectionHeader title="What is Seven Vital CBD?" />
      <Container fluid="lg" className="about">
        <Row className="align-items-center">
          <Col
            xs={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
            className="p-5"
          >
            <figure className="about__pictures">
              <img
                className="about__main-photo"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vprod014-pyh7zwt3z20bix5km8stpsp86wb92o11esdi9ky694.jpg"
                alt=""
              />
              <img
                className="about__secondary-photo"
                src="https://the7.io/cbd/wp-content/uploads/sites/104/elementor/thumbs/vim001-pyhf29wtf27pc3odb70bglxraml21zu3prtrj7sug8.jpg"
                alt=""
              />
            </figure>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
            className="p-5"
          >
            <div className="about__text-box">
              <p className="about__paragraph">
                Seven Vital – Vestibulum posuere felis vestibulum pharetra
                dapibus. Nam vitae sapien dapibus, condimentum ipsum non,
                porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu
                laoreet aliquam. Suspendisse potenti vitae sapien dapibus,
                condimentum, porttitor purus posuere felis vestibulum pharetra
                dapibus. Nam vitae sapien dapibus dolor!
              </p>
              <ul className="about__details">
                <li>
                  <UisCheckCircle />
                  <span> Sustainable organic production</span>
                </li>
                <li>
                  <UisCheckCircle /> <span>100% vegan product</span>
                </li>
                <li>
                  <UisCheckCircle /> <span> Premium quality CBD products</span>
                </li>
                <li>
                  <UisCheckCircle />
                  <span> Free shipping for orders over $50</span>
                </li>
                <li>
                  <UisCheckCircle /> <span>30 days free return period</span>
                </li>
                <li>
                  <UisCheckCircle /> <span> 24/7 online customer support</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
