import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh No! You got an error page!</Alert.Heading>
      <p>Go To Main Page which is available.</p>
      <Link to="/">
        <Button variant="primary">Go To Main</Button>
      </Link>
    </Alert>
  );
}
