import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import UpdateUserDataForm from "../UpdateUserDataForm/UpdateUserDataForm";
import UpdatePasswordForm from "../UpdatePasswordForm/UpdatePasswordForm";

import "./Account.styles.scss";

const Account = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Container fluid="md" className="account">
      <Row>
        <Col xs={12} lg={6} className="p-5">
          {!user ? <LoginForm /> : <UpdateUserDataForm user={user} />}
        </Col>
        <Col xs={12} lg={6} className="p-5">
          {!user ? <SignupForm /> : <UpdatePasswordForm />}
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
