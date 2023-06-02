import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SectionHeader.styles.scss";

const SectionHeader = ({ title, subheading }) => {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col xs={12} lg={10}>
          <div className="section-header">
            <img
              src="https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/art-floral.svg"
              alt="#"
              className="section-header__picture"
            />
            <h2 className="section-header__title">{title}</h2>
            {subheading && (
              <p className="section-header__subheading">{subheading}</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHeader;
