import { Button, Card, Image } from "react-bootstrap";

const img = `https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513`;

export default function UserBlock() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <p className="h2">
          <Image className="profile me-3" src={img} />
          Messi
          <Button className="ms-3" variant="outline-primary">
            Follow 99
          </Button>
        </p>
        <Card.Text>
          Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes
          ˈmesi] (About this soundlisten); born 24 June 1987), also known as Leo
          Messi, is an Argentine professional footballer who plays as a forward
          for Ligue 1 club Paris Saint-Germain and captains the Argentina
          national team.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
