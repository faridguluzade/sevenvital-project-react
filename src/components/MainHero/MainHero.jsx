import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../UI/Button/Button";

import { UilTemperatureQuarter } from "@iconscout/react-unicons";
import { UilTrees } from "@iconscout/react-unicons";
import { UilFlask } from "@iconscout/react-unicons";
import { UilShieldCheck } from "@iconscout/react-unicons";

import "./MainHero.styles.scss";

const MainHero = () => {
  return (
    <Container fluid="lg" className="main-hero">
      <Row>
        <Col>
          <div className="main-hero__text-box">
            <h1 className="main-hero__heading">Seven Vital</h1>
            <h3 className="main-hero__description">Premium CBD Products</h3>
            <Button filled={true} className="main-hero__link">
              View Popular Products
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={3}>
          <div className="main-hero__future-box">
            <UilTemperatureQuarter size="32" />
            <span className="main-hero__future-title">Gentle extraction</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="main-hero__future-box">
            <UilTrees size="32" />
            <span className="main-hero__future-title">
              100% organic farming
            </span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="main-hero__future-box">
            <UilFlask size="32" />
            <span className="main-hero__future-title">Carefully tested</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="main-hero__future-box">
            <UilShieldCheck size="32" />
            <span className="main-hero__future-title">Certified quality</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHero;
