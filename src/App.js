import "./App.scss";
import { Container, Card, Row, Col } from "react-bootstrap";
import menuItems from "./constants/menuItems.json";
 import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { connect } from "react-redux";
import { resetUserInfo } from "./store/actions/login.actions";
import { useState } from "react";
import { ConditionalModal } from "./components/Modal";
import ProfileHoc from './helpers/profile';

function App({ onLogout }) {
  let navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const logout = () => {
    onLogout();
  };
  return (
    <Container fluid className="project-zero-container">
      <Row className="nav">
        <Col xs={9} sm={9} md={9} className="links">
          <span className="project-title">Project Zero</span>
        </Col>

        <Col xs={2} sm={2} md={2} className="profile-icon">
          <ProfileHoc />
        </Col>

        <Col
          xs={1}
          sm={1}
          md={1}
          className="logout-icon"
          onClick={() => {
            setShowLogoutModal(true);
          }}
        >
          <MdLogout size={30} />
        </Col>
      </Row>
      <Row className="menu-tiles-container">
        {menuItems.map((item) => {
          return (
            <Col lg={3} sm={12} md={3} xs={12}>
              <Card
                key={item.id}
                onClick={() => {
                  item.active && navigate(item.navigation);
                }}
              >
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <ConditionalModal
        show={showLogoutModal}
        handleClose={() => setShowLogoutModal(false)}
        headerBody={"Are you sure you want to logout?"}
        headerTitle={"Confirm Logout"}
        yesText={"Okay"}
        noText={"Cancel"}
        handleYes={() => {
          logout();
        }}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {
    dispatch(resetUserInfo());
  },
});

export default connect(null, mapDispatchToProps)(App);
