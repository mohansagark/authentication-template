import "./styles.scss";
import { connect } from "react-redux";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SignUpTheme from "../../assets/sign-up-theme-2.webp";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const SignUpComponent = (props) => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = {
      username: email,
      firstName,
      lastName,
      displayName: firstName + " " + lastName,
      email,
    };
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (res.user.email) {
      sendEmailVerification(auth.currentUser);
    }

    await setDoc(doc(db, "users", res.user.uid), {
      ...data,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <Container fluid className="signUpContainer">
      <Row>
        <Col lg={2}></Col>
        <Col lg={8} className="login-form-bg">
          <Row style={{ height: "100%" }} className="align-items-center">
            <Col>
              <img width="100%" src={SignUpTheme} alt="login" />
            </Col>
            <Col>
              <Form>
                <h1 className="text-center">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Type your firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Type your lastname"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Type your username"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <div className="button-container">
                <button
                  type="submit"
                  onClick={(e) => {
                    onSignUp(e);
                  }}
                  className="login-btn"
                >
                  Sign Up
                </button>
              </div>
              <label
                className="back-to-login"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </label>
            </Col>
          </Row>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
