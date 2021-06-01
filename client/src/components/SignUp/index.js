import React, { useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import SignedUpModal from "../Modals/SignedUpModal";
import "./signup.css"

function SignUp(props) {

  const [, setHideModal] = useState(true);
  const [showModal, setShowModal]=useState(false);

   
  const closeModal = () => {
    setHideModal(true);
    setShowModal(false);
  }

  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let history = useHistory();

  let submitHandler = (event) => {
    event.preventDefault();
    // console.log(firstName.current.value);
    // console.log(lastName.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);

    let newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    // console.log(newUser);
    setShowModal(true);

    axios
      .post("/signup", newUser)
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
    <Form className="signUpForm" onSubmit={submitHandler}>
      <Form.Group controlId="formBasicName">
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control className="first" placeholder="First name" ref={firstName} />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control className="last" placeholder="Last name" ref={lastName} />
          </Col>
        </Row>
      </Form.Group>
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

      <Button className="submitSignUp btn-sm text-white ml-2" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="ml-1 mt-3 switch pb-5">Already have an account? <Link className="ml-2 goToLogIn" to ={"/login"} >Log-In Now!</Link></Row>
    <SignedUpModal status={showModal} hideModal={closeModal}/>
    </Container>
  );
}

export default SignUp;
