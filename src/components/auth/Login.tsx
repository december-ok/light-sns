import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/authHooks";
import { useAppSelector } from "../../modules/hooks";
import { RootState } from "../../modules/store";

import "../../sytles/login.scss";

export default function Login() {
  const { loaded, loggedIn } = useAppSelector((state: RootState) => state.app);
  const [onEmailChange, onPasswordChange, onChange, doLogin, loading, error] =
    useLogin();

  return (
    <div className="Login">
      {!loading && loaded && loggedIn && <Navigate to="/main/timeLine" />}
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} sm={9} lg={6} xl={4}>
            <h1>Login</h1>
            <Form onSubmit={doLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={onEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={onPasswordChange}
                />
                <Form.Text className="text-muted">
                  Password is consisted with at least 6 characters.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                  onChange={onChange}
                />
              </Form.Group>
              {error && (
                <Alert variant="danger">⚠ Email or Password is Wrong!</Alert>
              )}
              <Form.Group className="mt-3">
                <Button type="submit" variant="primary" disabled={loading}>
                  Login
                </Button>
                <Link to="/join">
                  <Button
                    className="mx-3"
                    variant="outline-primary"
                    disabled={loading}
                  >
                    Join
                  </Button>
                </Link>
                {loading && (
                  <Spinner
                    className="align-middle"
                    animation="border"
                    role="status"
                  />
                )}
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
