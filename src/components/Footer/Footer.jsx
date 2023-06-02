import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilMasterCard } from "@iconscout/react-unicons";
import { UilCardAtm } from "@iconscout/react-unicons";
import { UilPaypal } from "@iconscout/react-unicons";
import { UilTransaction } from "@iconscout/react-unicons";

import Button from "../UI/Button/Button";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <Container fluid="lg" className="footer__container p-5">
      {/* className="d-sm-flex flex-sm-column flex-md-row align-items-center gap-5 mt-5" */}
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column flex-sm-row align-items-sm-center gap-5 mt-5"
        >
          <figure className="footer__logo">
            <img
              src="https://the7.io/cbd/wp-content/uploads/sites/104/2020/09/vital-logo-white.svg"
              alt=""
              className="footer__photo"
            />
          </figure>
          <div className="footer__icons">
            <UilFacebookF size="30" className="footer__icon" />
            <UilTwitter size="30" className="footer__icon" />
            <UilInstagram size="30" className="footer__icon" />
            <UilYoutube size="30" className="footer__icon" />
          </div>
        </Col>
      </Row>

      <Row className="align-items-center gap-md-5 gap-lg-0">
        <Col xs={12} md={6} lg={4}>
          <nav className="footer__nav">
            <h4 className="footer__heading">Information</h4>
            <ul className="footer__list">
              <li>Contact</li>
              <li>Demo Design System</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </Col>

        <Col xs={12} md={6} lg={4} className="mt-5 pt-5">
          <div className="footer__payment">
            <h4 className="footer__heading">Payment methods</h4>
            <div className="footer__payment-icons">
              <UilMasterCard size="30" />
              <UilCardAtm size="30" />
              <UilPaypal size="30" />
              <UilTransaction size="30" />
            </div>
            <p className="footer__text">
              We care about your safety. We guarantee that your purchase will
              run smoothly.
            </p>
          </div>
        </Col>

        <Col xs={12} md={8} lg={4}>
          <div className="footer__newsletter">
            <h4 className="footer__heading">Get our newsletter</h4>
            <form className="footer__form">
              <input
                className="footer__input"
                type="email"
                placeholder="Enter Your Email"
              />
              <Button className="footer__btn" filled={true}>
                Sign up!
              </Button>
            </form>
            <p className="footer__text">
              Enjoy all the latest stories, tips, news & useful advice!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-sm-center" xs={12} lg={4}>
          <span className="copyright">
            &copy; Copyright 2023 Dream-Theme. All rights reserved.
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
