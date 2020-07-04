import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./style.css"

function MenuBar() {

  const user = true;

return (

<Navbar expand="sm" variant="dark" className="menubar">
  <Container classname="col col-centered">
  <Navbar.Brand href="/">Queen St. Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      { user ? (<>
      <Nav.Link href="/account">Account</Nav.Link>
      <Nav.Link href="/logout">Log-Out</Nav.Link>
      </>)
      :
      (<>
      <Nav.Link href="/login">Log-In</Nav.Link>
      <Nav.Link href="/signup">Sign-Up</Nav.Link>
      </>)}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)

}


export default MenuBar;