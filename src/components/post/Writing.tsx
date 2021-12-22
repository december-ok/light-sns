import { Button, Col, Form, Row } from "react-bootstrap";
import FriendBlockList from "../timeline/FriendBlockList";

export default function Writing() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Write Your Thinking!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  );
}
