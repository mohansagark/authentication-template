import { Col, Form, Row } from "react-bootstrap";
import Button from "../../components/Button";
import "./styles.scss";

const SavePasswordForm = (
  username,
  setUsername,
  website,
  setWebsite,
  password,
  savePassword
) => {
  const options = [
    {
      id: 1,
      value: "meta",
      title: "Meta",
    },
    {
      id: 3,
      value: "amazon",
      title: "Amazon",
    },
    {
      id: 4,
      value: "apple",
      title: "Apple",
    },
    {
      id: 5,
      value: "netflix",
      title: "Netflix",
    },
    {
      id: 2,
      value: "google",
      title: "Google",
    },
    {
      id: 6,
      value: "other",
      title: "Other",
    },
  ];

  const submitForm = () => {
    if (username) {
      let data = {
        id: "srp_" + new Date().getTime(),
        sitename: website.value,
        username: username,
        password: password,
      };
      savePassword(data);
    }
  };

  return (
    <Form className="savePasswordForm">
      <Form.Group className="mb-3" controlId="formBasicWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Select
          size={"lg"}
          aria-label="Default select example"
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        >
          <option>Choose a website</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.value}>
              {opt.title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          value={password}
          disabled
        />
      </Form.Group>
      <Row className="justify-content-center">
        <Col xs={2} />
        <Col xs={4}>
          <Button title="Save" clickMethod={submitForm} />
        </Col>
      </Row>
    </Form>
  );
};

export default SavePasswordForm;
