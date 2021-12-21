import { Col, Row } from "react-bootstrap";
import FriendBlockList from "../timeline/FriendBlockList";
import UserBlock from "./UserBlock";
import UserPosts from "./UserPosts";

export default function User() {
  return (
    <div className="User">
      <Row>
        <Col></Col>
        <Col sm={12} lg={6}>
          <UserBlock />
          <UserPosts />
        </Col>
        <Col className="d-none d-lg-inline" lg={3}>
          <FriendBlockList />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
