import React from "react";

import Container from "react-bootstrap/Container";

import { UilHeadphones } from "@iconscout/react-unicons";

import Button from "../UI/Button/Button";

import "./Help.styles.scss";

const Help = () => {
  return (
    <Container>
      <div className="help">
        <h2 className="help__heading">Questions? We are here to help!</h2>

        <div className="help__content-box">
          <div className="d-flex align-items-center gap-3">
            <UilHeadphones />
            <span className="fs-3">Hotline:</span>
            <span className="fs-1 fw-bold">001 234-567-890</span>
          </div>

          <Button className="help__btn" filled={true}>
            Contact us online &rarr;
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Help;
