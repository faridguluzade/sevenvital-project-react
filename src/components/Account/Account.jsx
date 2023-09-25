import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Account.styles.scss";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

const Account = () => {
  return (
    <Container fluid="md" className="account">
      <Row>
        <Col xs={12} lg={6} className="p-5">
          <LoginForm />
        </Col>
        <Col xs={12} lg={6} className="p-5">
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
