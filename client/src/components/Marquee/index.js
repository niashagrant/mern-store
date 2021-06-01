import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";
import MenuBar from "../Menubar/index";

function Marquee() {
  return (
    <Jumbotron fluid className="jumbotron center">
      <img className="mastheadImage" src="../images/queenStreetMarket.png" alt="Queen St. Market"/>
    </Jumbotron>
  
  );
}

export default Marquee;

