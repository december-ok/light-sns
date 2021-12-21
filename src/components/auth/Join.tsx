import { useCallback, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCheckBox } from "../../hooks/useCheckBox";
import { useInput } from "../../hooks/useInput";

export default function Join() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [onEmailChange, emailValue] = useInput();
  const [onPasswordChange, passwordValue] = useInput();
  const [onPasswordCheckChange, passwordCheckValue] = useInput();
  const [onNameChange, passwordNameValue] = useInput();
  const [onCheckChange, checkValue] = useCheckBox(false);

  const doJoin = useCallback(() => {
    //hihihihihi
  }, []);

  return (
    <div className="Join">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} sm={9} lg={6} xl={4}>
            <h1>Join</h1>
            <Form>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Verify assword"
                  onChange={onPasswordCheckChange}
                />
                <Form.Text className="text-muted">
                  Make sure password should be identical.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" onChange={onNameChange} />
                <Form.Text className="text-muted">
                  Name cannot be changed.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I promise not to cause any legal problems using this SNS."
                />
              </Form.Group>
              {errorMessage !== "" && (
                <Alert variant="danger">⚠ Email or Password is Wrong!</Alert>
              )}
              <Form.Group className="mt-3">
                <Button onClick={doJoin} variant="primary">
                  Submit
                </Button>
                <Link to="/">
                  <Button className="mx-3" variant="outline-secondary">
                    Back to Login
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
