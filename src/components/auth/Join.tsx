import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useJoin, useLoginCheck } from "../../hooks/authHooks";

export default function Join() {
  useLoginCheck(false);

  const [
    onEmailChange,
    onPasswordChange,
    onPasswordCheckChange,
    onNameChange,
    onChange,
    doJoin,
    isSame,
    loading,
    error,
  ] = useJoin();

  return (
    <div className="Join">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} sm={9} lg={6} xl={4}>
            <h1>Join</h1>
            <Form onSubmit={doJoin}>
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Verify assword"
                  onChange={onPasswordCheckChange}
                />
                {isSame ? (
                  <Form.Text className="text-primary">
                    Password is identical.
                  </Form.Text>
                ) : (
                  <Form.Text className="text-danger">
                    Make sure password should be identical.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" onChange={onNameChange} />
                <Form.Text className="text-muted">
                  Name cannot be changed.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  onChange={onChange}
                  type="checkbox"
                  label="I promise not to cause any legal problems using this SNS."
                />
              </Form.Group>
              {error && <Alert variant="danger">⚠ Something is wrong!</Alert>}
              <Form.Group className="mt-3">
                <Button type="submit" variant="primary" disabled={loading}>
                  Submit
                </Button>
                <Link to="/">
                  <Button
                    className="mx-3"
                    variant="outline-secondary"
                    disabled={loading}
                  >
                    Back to Login
                  </Button>
                </Link>
                {loading && <Spinner animation="border" role="status" />}
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
