import React from "react";

import SectionHeader from "../UI/SectionHeader/SectionHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DUMMY_BENEFITS } from "../../constants";

import "./Benefits.styles.scss";

const Benefits = () => {
  return (
    <>
      <SectionHeader title="What Will You Get" />
      <Container fluid="lg" className="benefits">
        <Row>
          {DUMMY_BENEFITS.map((benefitItem) => (
            <Col key={benefitItem.id} xs={12} md={6} className="py-5">
              <div className="benefits__box">
                <div className="benefits__icon">{benefitItem.icon}</div>
                <h3 className="benefits__title">{benefitItem.title}</h3>
                <p className="benefits__description">
                  {benefitItem.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Benefits;
