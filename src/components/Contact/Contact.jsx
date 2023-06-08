import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilHeadphones } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import "./Contact.styles.scss";

function Contact() {
  return (
    <Container fluid="md" className="contact ">
      <Row className="justify-content-center">
        <Col xs={9}>
          <Row className="align-items-center p-3 gap-5 gap-lg-0">
            <Col md={12} lg={4}>
              <div className="contact__info">
                <UilHeadphones className="contact__icon" />
                <span>Customer support</span>
                <p className="fw-bold">001 234-567-890</p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="contact__info">
                <UilEnvelopeAlt className="contact__icon" />
                <span>Email</span>
                <p>info@dream-theme.com</p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="contact__info">
                <UilLocationPoint className="contact__icon" />
                <span> Our location</span>
                <p>001234, Los-Angeles, California</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs={12} lg={9} className="my-5">
          <Form
            headingText="Questions? Drop us a line!"
            btnText="Send Message"
            className="contact__heading"
          >
            <Input id="name" label="Name" type="text" placeholder="Name" />
            <Input id="email" label="Email" type="email" placeholder="Name" />
            <div className="d-flex flex-column gap-4">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="p-4"
              ></textarea>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
