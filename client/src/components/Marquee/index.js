import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

function Marquee() {
  return (
    <Jumbotron className="jumbotron mb-5 d-flex justify-content-center">
      <img className="mastheadImage" src="../images/queenStreetMarket.png" alt="Queen St. Market"/>
    </Jumbotron>
  );
}

export default Marquee;

