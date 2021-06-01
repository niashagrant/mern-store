import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import axios from "axios";

function MenuBar(props) {
  console.log(props);
  let history = useHistory();
  const { user } = props;
  const logOut = () => {
    console.log("logging out");
    axios.get("/logout").then((res) => {
      props.setLogin(null);
      history.push("/");
    });
  };

  return (
    <Navbar
      className="menubar"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="stacked">
          <Nav.Link className="navBarProducts" onClick={() => {history.push("/");}}>
          Main
          </Nav.Link>
          <Nav.Link
            className="navBarCart"
            onClick={() => {
              history.push("/cart");
            }}
          >  
            Cart
          </Nav.Link>
          { user ? ( <> 
              <Nav.Link 
                className="navBarLogOut" onClick={logOut} href="#">
                Log-Out
              </Nav.Link>
            </>) : (<>
              <Nav.Link
                className="navBarLogIn"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Log-In
              </Nav.Link>
            </>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;
