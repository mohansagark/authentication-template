import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../assets/forgot-password-img.png";
import "./style.scss";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";

const ForgotPasswordComponent = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onForgotPassword = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email, "http://localhost:3000/login");
  };

  return (
    <Container fluid className="forgot-password-container">
      <Container fluid className="divider-1">
        <Row>
          <Col lg={12}>
            <h1 className="forgotPs-title">Auth Template</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="divider-2">
        <Row>
          <Col lg={4} className="forgotPs-form">
            <img
              src={ForgotPassword}
              alt="forgot password"
              className="forgotPs-img"
            />
            <h1 className="forgotPs-label">Forgot Password</h1>
            <Form.Text className="forgotPs-desc">
              Enter your email and we'll send you a link to reset your password
            </Form.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={(e) => {
                    onForgotPassword(e);
                  }}
                >
                  Submit
                </button>
              </Form.Group>
            </Form>

            <Row>
              <Col lg={3}></Col>
              <Col lg={6}>
                <label
                  className="back-to-login"
                  onClick={() => navigate("/login")}
                >
                  Back to Login
                </label>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ForgotPasswordComponent;
