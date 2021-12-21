import { useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useBoolean } from "../hooks/useCheckBox";

import "../sytles/postBlock.scss";
const img = `https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513`;

interface PostBlockProps {
  userName: string;
  imgSrc: string;
  content: string;
}

export default function PostBlock() {
  const [toggle, onChange, liked, setLiked] = useBoolean(false);

  return (
    <div className="PostBlock mb-1">
      <Card>
        <Card.Body>
          <Link to="/users/1">
            <Card.Title>
              <Image className="profile me-3" src={img} />
              Messi
            </Card.Title>
          </Link>
          <Link to="/posts/1">
            <Card.Text>
              Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel
              anˈdɾes ˈmesi] (About this soundlisten); born 24 June 1987), also
              known as Leo Messi, is an Argentine professional footballer who
              plays as a forward for Ligue 1 club Paris Saint-Germain and
              captains the Argentina national team.
            </Card.Text>
          </Link>
        </Card.Body>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Button
              variant={liked ? "danger" : "outline-danger"}
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
