import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="border-bottom border-primary border-1 mb-3 ">
      <Container>
        <Link to={"/timeLine"}>
          <Navbar.Brand>⚡Light SNS</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          Developed by December
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
