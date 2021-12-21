import { Button, Col, Form, Row } from "react-bootstrap";
import FriendBlockList from "../timeline/FriendBlockList";

export default function Writing() {
  return (
    <Row>
      <Col></Col>
      <Col sm={12} lg={6}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Write Your Thinking!</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
      </Col>
      <Col className="d-none d-lg-inline" lg={3}>
        <FriendBlockList />
      </Col>
      <Col></Col>
    </Row>
  );
}
