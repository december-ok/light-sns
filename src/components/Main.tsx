import { Col, Row } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../modules/hooks";
import { RootState } from "../modules/store";
import Error from "./Error";
import Posts from "./post/Posts";
import Writing from "./post/Writing";
import FriendBlockList from "./timeline/FriendBlockList";
import PostBlockList from "./timeline/PostBlockList";
import Users from "./user/Users";

export default function Main() {
  const { loaded, loggedIn } = useAppSelector((state: RootState) => state.app);

  return (
    <div className="Main">
      {loaded && !loggedIn && <Navigate to="/" />}
      <Row>
        <Col></Col>
        <Col sm={12} lg={6}>
          <Routes>
            <Route path="timeLine" element={<PostBlockList />} />
            <Route path="writing" element={<Writing />} />
            <Route path="posts/:id" element={<Posts />} />
            <Route path="users/:id" element={<Users />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Col>
        <Col className="d-none d-lg-inline" lg={3}>
          <FriendBlockList />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
