import { Card, Image } from "react-bootstrap";
import PostBlock from "../PostBlock";
const img = `https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513`;

export default function UserPosts() {
  return (
    <div className="UserPosts">
      <Card>
        <Card.Header className="bg-primary bg-gradient text-white">
          Posts
        </Card.Header>
      </Card>
      {[1, 2, 0.3, 3].map(() => (
        <PostBlock />
      ))}
    </div>
  );
}
