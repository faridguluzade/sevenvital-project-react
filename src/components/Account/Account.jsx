import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import "./Account.styles.scss";

const Account = () => {
  return (
    <Container className="account">
      <Row>
        <Col xs={6} className="p-5">
          <Form headingText="Login" btnText="Login">
            <Input
              id="username"
              label="Username or email address"
              type="text"
            />
            <Input id="password" label="Password" type="password" />
          </Form>
        </Col>
        <Col xs={6} className="p-5">
          <Form headingText="Register" btnText="Register">
            <Input id="email" label="Email address" type="text" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
