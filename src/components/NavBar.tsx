import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../modules/hooks";
import { RootState } from "../modules/store";

export default function NavBar() {
  const { loaded, loggedIn } = useAppSelector((state: RootState) => state.app);

  return (
    <Navbar className="border-bottom border-primary border-1 mb-3 ">
      <Container>
        <Link to={"main/timeLine"}>
          <Navbar.Brand>⚡Light SNS</Navbar.Brand>
        </Link>

        {loaded && loggedIn ? (
          <div>
            <Link to="/main/writing">
              <Button variant="primary">Write</Button>
            </Link>
            <Link to="/" className="ms-3">
              <Button variant="outline-danger">Logout</Button>
            </Link>
          </div>
        ) : (
          <Navbar.Collapse className="justify-content-end">
            Developed by December
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}
