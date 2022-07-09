import { useState } from "react";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import BackNavigation from "../../components/BackNavigation";
import "./style.scss";
import YoutubePage from "./youtube";
import LinkedInPage from "./linkedIn";
import InstagramPage from './instagram';
import FacebookPage from "./facebook";
import TwitterPage from './twitter';

const SubscriptionsComponent = () => {
  const [selectedSubscription, setSelectedSubscription] = useState("");

  const SelectedSubscription = () => {
    switch (selectedSubscription) {
      case "linkedin":
      return <LinkedInPage />;
      case "instagram":
      return <InstagramPage />;
      case "youtube":
      return <YoutubePage />;
      case "facebook":
      return <FacebookPage />;
      case "twitter":
      return <TwitterPage />;

      default:
        return <h3 className="text-center">No Page Available</h3>;
    }
  };
  return (
    <Container fluid className="sub-container">
      <BackNavigation title={"Subscriptions"} />
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Tab.Container
              id="list-group-tabs-example"
              // defaultActiveKey="#linkedIn"
            >
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item
                      onClick={() => setSelectedSubscription("linkedin")}
                      action
                      href="#linkedIn"
                    >
                      LinkedIn
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => setSelectedSubscription("instagram")}
                      action
                      href="#insta"
                    >
                      Instagram
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => setSelectedSubscription("facebook")}
                      action
                      href="#facebook"
                    >
                      Facebook
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => setSelectedSubscription("youtube")}
                      action
                      href="#youtube"
                    >
                      Youtube
                    </ListGroup.Item>
                    <ListGroup.Item
                      onClick={() => setSelectedSubscription("twitter")}
                      action
                      href="#twitter"
                    >
                      Twitter
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <SelectedSubscription />
                    <Tab.Pane eventKey="#insta">Tab 2</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SubscriptionsComponent;
