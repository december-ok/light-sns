import { Button, Card, Col, Image, Row, Spinner } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useUserBlock } from "../../hooks/postHooks";

const img = `https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513`;

export default function UserBlock() {
  const { id } = useParams();
  const [user, isCurrentUser, loading, error] = useUserBlock(id);
  return (
    <>
      {error && <Navigate to="/error" />}
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
      {user && (
        <Card className="mb-3">
          <Card.Body>
            <p className="h2">
              <Image className="profile me-3" src={user.profileImg} />
              {user.nickName}
              <Button className="ms-3" variant="outline-primary">
                Follow 99
              </Button>
            </p>
            <Card.Text>{user.quote}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
