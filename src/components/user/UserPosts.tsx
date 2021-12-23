import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetUserPosts } from "../../hooks/postHooks";
import PostBlock from "../PostBlock";

export default function UserPosts() {
  const { id } = useParams();
  const [posts, loading] = useGetUserPosts(id ? id : "");
  return (
    <div className="UserPosts">
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
      <Card>
        <Card.Header className="bg-primary bg-gradient text-white">
          Posts
        </Card.Header>
      </Card>
      {posts.map((post, idx) => (
        <PostBlock post={post} key={idx} />
      ))}
    </div>
  );
}
