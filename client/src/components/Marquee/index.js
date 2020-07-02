import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

function Marquee() {
  return (
    <Jumbotron className="jumbotron" fluid>
      <img src="../images/marquee.jpg" alt="Queen St. Market" fluid/>
    </Jumbotron>
  );
}

export default Marquee;
