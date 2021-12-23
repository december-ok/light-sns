import { Col, Row, Spinner } from "react-bootstrap";
import { useGetPosts } from "../../hooks/postHooks";
import PostBlock from "../PostBlock";

export default function PostBlockList() {
  const [posts, loading] = useGetPosts();

  return (
    <div className="PostBlockList">
      <p className="h1 d-none d-lg-block">TimeLine</p>
      {loading && (
        <Row>
          <Col xs={true} />
          <Col xs={"auto"}>
            <Spinner className="align-middle" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
          <Col xs={true} />
        </Row>
      )}
      {posts.map((post, idx) => (
        <PostBlock post={post} key={idx} />
      ))}
    </div>
  );
}
