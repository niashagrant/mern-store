import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./style.css"
import axios from "axios";

function MenuBar(props) {
  console.log(props)
  let history = useHistory();

  const logOut=()=>{
    console.log("logging out")
    axios.get("/logout")
    .then(res=>{
      props.setLogin(null)
      history.push("/")
    })
  }
  

return (

<Navbar expand="sm" variant="dark" className="menubar">
  <Container className="col col-centered">
  <Navbar.Brand href="/" className="marketTitle">Queen St. Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link  onClick={()=>{history.push("/")}}>Home</Nav.Link>
      <Nav.Link  onClick={()=>{history.push("/cart")}}>Cart</Nav.Link>
      <Nav.Link  onClick={()=>{history.push("/account")}}>Account</Nav.Link>
      <Nav.Link onClick= {logOut} href="#">Log-Out</Nav.Link>
      <Nav.Link  onClick={()=>{history.push("/login")}}>Log-In</Nav.Link>
      <Nav.Link  onClick={()=>{history.push("/signup")}}>Sign-Up</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)

}


export default MenuBar;