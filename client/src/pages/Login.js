import React from "react";
import SignIn from "../components/SignIn";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <>
      <Container>
        <SignIn>
          Enter Email:
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          Enter Password:
          <Form.Control type="password" placeholder="Password" />
        </SignIn>
      </Container>
    </>
  );
}

export default Login;
