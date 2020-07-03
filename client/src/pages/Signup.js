import React from "react";
import SignIn from "../components/SignIn";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function SignUp() {
  return (
    <>
      <Container>
        <SignIn>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control type="password" placeholder="Password" />
        </SignIn>
      </Container>
    </>
  );
}

export default SignUp;
