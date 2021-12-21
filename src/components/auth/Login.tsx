import React, { useCallback, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Navbar,
  Row,
} from "react-bootstrap";
import { useInput } from "../../hooks";

import "../../sytles/login.scss";

export default function Login() {
  const [loginError, setLoginError] = useState(false);
  const [onEmailChange, emailValue] = useInput();
  const [onPasswordChange, passwordValue] = useInput();

  const doLogin = useCallback(() => {
    setLoginError((state) => !state);
  }, []);

  return (
    <div className="Login">
      <Navbar>
        <Container>
          <Navbar.Brand>⚡Light SNS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            Developed by December
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} sm={9} lg={6} xl={4}>
            <h1>Login</h1>
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              {loginError && (
                <Alert variant="danger">⚠ Email or Password is Wrong!</Alert>
              )}
              <Button onClick={doLogin} variant="primary">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
