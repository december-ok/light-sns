import { Col, Row } from "react-bootstrap";
import PostBlock from "../PostBlock";
import FriendBlockList from "../timeline/FriendBlockList";

export default function Posts() {
  return (
    <Row>
      <Col></Col>
      <Col sm={12} lg={6}>
        <PostBlock />
      </Col>
      <Col className="d-none d-lg-inline" lg={3}>
        <FriendBlockList />
      </Col>
      <Col></Col>
    </Row>
  );
}
