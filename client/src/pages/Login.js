<<<<<<< HEAD
import React from 'react';
import Container from 'react-bootstrap/Container';


function Login() {

    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Log-in Page</h6>
        </Container>
    )

=======
import React from "react";
import SignIn from "../components/SignIn";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <>
      <Container>
        <SignIn />
      </Container>
    </>
  );
>>>>>>> cab0a6d0b81dacd10e3577cd534d00d954e44f04
}

export default Login;
