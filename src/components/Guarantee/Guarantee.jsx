import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons
import { UilUsdCircle } from "@iconscout/react-unicons";
import { UilCommentHeart } from "@iconscout/react-unicons";
import { UilTruck } from "@iconscout/react-unicons";
import { UilHeadphones } from "@iconscout/react-unicons";

import "./Guarantee.styles.scss";

const Guarantee = () => {
  return (
    <Container className="guarantee">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <div className="guarantee__box">
            <UilUsdCircle size="30" />
            <span className="guarantee__text">
              30 days money back guarantee
            </span>
          </div>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <div className="guarantee__box">
            <UilCommentHeart size="30" />
            <span className="guarantee__text">
              Over 100 000 satisfied customers
            </span>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="guarantee__box">
            <UilTruck size="30" />
            <span className="guarantee__text">
              Free delivery for orders over $50
            </span>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="guarantee__box">
            <UilHeadphones size="30" />
            <span className="guarantee__text">
              24/7 online customers support
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Guarantee;
