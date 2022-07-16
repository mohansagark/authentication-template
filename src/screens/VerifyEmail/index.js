import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../assets/forgot-password-img.png";
import "./style.scss";
import { useState } from "react";
import { validateEmail } from "../../helpers/general";

const VerifyEmail = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onVerifyEmail = async (e) => {
    // e.preventDefault();
    // await sendPasswordResetEmail(auth, email, "http://localhost:3000/login");
  };

  return (
    <Container fluid className="verify-email-container">
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
            <h1 className="forgotPs-label">Verify Email</h1>
            <Form.Text className="forgotPs-desc">
              Enter your email and we'll send you a verification link
            </Form.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    validateEmail(e.target.value) && setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={
                    email
                      ? (e) => {
                          onVerifyEmail(e);
                        }
                      : null
                  }
                >
                  Send verification email
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

export default VerifyEmail;
