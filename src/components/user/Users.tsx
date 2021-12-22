import { Col, Row } from "react-bootstrap";
import FriendBlockList from "../timeline/FriendBlockList";
import UserBlock from "./UserBlock";
import UserPosts from "./UserPosts";

export default function Users() {
  return (
    <div className="User">
      <UserBlock />
      <UserPosts />
    </div>
  );
}
