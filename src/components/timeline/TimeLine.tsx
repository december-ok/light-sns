import { Col, Row } from "react-bootstrap";
import FriendBlockList from "./FriendBlockList";
import PostBlock from "../PostBlock";
import PostBlockList from "./PostBlockList";

export default function TimeLine() {
  return (
    <div className="TimeLine">
      <Row>
        <Col></Col>
        <Col sm={12} lg={6}>
          <PostBlockList />
        </Col>
        <Col className="d-none d-lg-inline" lg={3}>
          <FriendBlockList />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
