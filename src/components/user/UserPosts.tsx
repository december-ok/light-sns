import { Card } from "react-bootstrap";
import PostBlock from "../PostBlock";

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
