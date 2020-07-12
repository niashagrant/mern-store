import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

function Marquee() {
  return (
    <Jumbotron className="jumbotron mb-5" fluid>
      <img className="mastheadImage" src="../images/queenstmarket.jpg" alt="Queen St. Market"/>
    </Jumbotron>
  );
}

export default Marquee;
