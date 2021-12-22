import { Card, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const img = `https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513`;

export default function FriendBlockList() {
  return (
    <div className="FriendBlockList">
      <Card className="mb-3">
        <Card.Header className="bg-primary bg-gradient text-white">
          My Profile
        </Card.Header>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Messi</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="bg-info bg-gradient text-white">
          Following
        </Card.Header>
        <ListGroup variant="flush">
          {[1, 2, 0.3, 3].map((item, indx) => (
            <Link to="/main/users/dsf" key={indx}>
              <ListGroup.Item>
                <Image className="profile me-3" src={img} />
                Messi
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
