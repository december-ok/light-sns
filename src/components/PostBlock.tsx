import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Post } from "../@types/types";
import { useBoolean } from "../hooks/useBoolean";

import "../sytles/postBlock.scss";

interface PostBlockProps {
  post: Post;
}

export default function PostBlock({ post }: PostBlockProps) {
  const { toggle, value } = useBoolean(false);
  return (
    <div className="PostBlock mb-2">
      <Card>
        <Card.Body>
          <Link to={`/main/users/${post.author.uid}`}>
            <Card.Title>
              <Image className="profile me-3" src={post.author.profileImg} />
              {post.author.nickName}
            </Card.Title>
          </Link>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Button
              variant={value ? "danger" : "outline-danger"}
              onClick={toggle}
            >
              Heart 99
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="outline-primary">Comment 99</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
