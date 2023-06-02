import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Button from "../UI/Button/Button";

import { UilFlask } from "@iconscout/react-unicons";
import { UilProcess } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { UilBullseye } from "@iconscout/react-unicons";
import { UilFlower } from "@iconscout/react-unicons";
import { UilTemperatureEmpty } from "@iconscout/react-unicons";

import "./Future.styles.scss";

// const DUMMY_FUTURE = [
//   {
//     id: 1,
//     icon: "",
//     title: "",
//     description: "",
//   },
// ];

const Future = () => {
  return (
    <>
      <SectionHeader
        title="Why Choose Our CBD Products?"
        subheading={
          "Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!"
        }
      />
      <Container fluid="lg" className="future">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="future__box">
              <UilFlask className="future__icon" />
              <h3 className="future__title">100% Natural Ingredients</h3>
              <p className="future__description">
                Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="future__box">
              <UilProcess className="future__icon" />
              <h3 className="future__title">Recyclable Materials</h3>
              <p className="future__description">
                Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="future__box">
              <UilCheckCircle className="future__icon" />
              <h3 className="future__title">FDA Approved</h3>
              <p className="future__description">
                Glavrida amet sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
                consectetur adipiscing lorem dolor ipsum.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="future__box">
              <UilBullseye className="future__icon" />
              <h3 className="future__title">Unique Technology</h3>
              <p className="future__description">
                Nulla sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="future__box">
              <UilFlower className="future__icon" />
              <h3 className="future__title">Organic Production</h3>
              <p className="future__description">
                Lorem ipsum bnulla ametamet consectetur adipiscing sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="future__box">
              <UilTemperatureEmpty className="future__icon" />
              <h3 className="future__title">Multiple Level Control</h3>
              <p className="future__description">
                Ametamet sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Col>
          <Row>
            <Col xs={12}>
              <Button className="future__link">Browse Popular Products</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Future;
