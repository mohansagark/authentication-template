import "./styles.scss";
import { connect } from "react-redux";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useCallback, useEffect } from "react";
import { googleClientId } from "../../config/config";
import jwtDecode from "jwt-decode";
import { setUserInfo } from "../../store/actions/login.actions";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
import LoginTheme from "../../assets/login-theme1.webp";

const Login = (props) => {
  let navigate = useNavigate();
  const { setUserData } = props;

  const handleCallbackResponse = useCallback(
    (response) => {
      var userObject = jwtDecode(response.credential);
      setUserData(userObject);
      document.getElementById("signInDiv").hidden = true;
    },
    [setUserData]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleCallbackResponse,
      auto_select: true,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    // google.accounts.id.prompt();
  }, [handleCallbackResponse]);

  return (
    <Container fluid className="loginContainer">
      <Row>
        <Col lg={2}></Col>
        <Col lg={8} className="login-form-bg">
          <Row style={{ height: "100%" }} className="align-items-center">
            <Col>
              <img width="100%" src={LoginTheme} alt="login" />
            </Col>
            <Col>
              <Form>
                <h1 className="text-center">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Type your username"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Type your password"
                  />
                </Form.Group>
              </Form>
              <Col lg={4}></Col>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Form.Text
                  className="forgot-password"
                  onClick={() => navigate("/forgotPassword")}
                >
                  Forgot password ?
                </Form.Text>
              </Col>
              <div className="button-container">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
              <Row>
                <Col lg={12}>
                  <h6 className="signup-text">Or Signup using</h6>
                </Col>
                <Col lg={3}></Col>

                <Col lg={6} className="social-media-links">
                  <button type="submit" className="facebook-btn">
                    <FaFacebookF />
                  </button>
                  <button type="submit" className="twitter-btn">
                    <FiTwitter />
                  </button>
                  <button type="submit" className="google-btn">
                    <AiOutlineGoogle />
                  </button>
                </Col>
                <Col lg={3}></Col>
              </Row>
              {/* <div id="signInDiv" /> */}
              <Row>
                <Col lg={12}>
                  <h6 className="signup-text">
                    Or Don't have an account?{" "}
                    <label onClick={() => navigate("/signup")}>Sign up</label>
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => {
    dispatch(setUserInfo(userData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
