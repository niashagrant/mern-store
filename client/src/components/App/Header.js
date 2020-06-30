import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function Header() {

  const user = false;

return (

<Navbar bg="primary" expand="sm" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Bootcamp Bodega</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
      { user ? (<>
      <Nav.Link href="#account">Account</Nav.Link>
      <Nav.Link href="#log-out">Log-Out</Nav.Link>
      </>)
      :
      (<>
      <Nav.Link href="#log-in">Log-In</Nav.Link>
      <Nav.Link href="#sign-up">Sign-Up</Nav.Link>
      </>)}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)

}


export default Header;