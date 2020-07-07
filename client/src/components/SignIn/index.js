import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


function SignIn(props) {
  console.log("This is our props:", props);
  let email = useRef();
  let password = useRef();
  let history = useHistory();

  let submitHandler = (event) => {
    event.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);

    let currentUser = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(currentUser);

    axios
      .post("/login", currentUser)
      .then(function (data) {
        console.log(data.data);
        props.setLogin(data.data);
        history.push("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
