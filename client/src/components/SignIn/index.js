import React, { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./signin.css"


function SignIn(props) {
  // console.log("This is our props:", props);
  let email = useRef();
  let password = useRef();
  let history = useHistory();

  let submitHandler = (event) => {
    event.preventDefault();

    // console.log(email.current.value);
    // console.log(password.current.value);

    let currentUser = {
      email: email.current.value,
      password: password.current.value,
    };

    // console.log(currentUser);

    axios
      .post("/login", currentUser)
      .then(function (data) {
        // console.log(data.data);
        props.setLogin(data.data);
        history.push("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5 signUpContainer">
    <Form className = "logInForm" onSubmit={submitHandler}>
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

      <Button className="login btn-sm" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="ml-1 mt-3 switch pb-5">Don't have an account? <Link className="ml-2 signUp" to ={"/signup"} >Sign-Up Now!</Link></Row>
    </Container>
  );
}

export default SignIn;
