import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        {props.children}
      </Form.Group>

      {/* <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        {props.children}
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
