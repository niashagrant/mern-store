import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

function Marquee() {
  return (
    <Jumbotron className="jumbotron" fluid>
      <img className="mastheadImage" src="../images/masthead.jpg" alt="Queen St. Market"/>
    </Jumbotron>
  );
}

export default Marquee;
