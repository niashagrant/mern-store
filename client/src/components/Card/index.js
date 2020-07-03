import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function Cards(props) {
  return (
    <Card sm className="eachCard" style={{flex: 1}}>
      <Card.Img
        variant="top"
        className="cardImg"
        data-id={props.id}
        alt={props.name}
        key
        src={process.env.PUBLIC_URL + props.image}
      />
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text className="float-right">${props.price}</Card.Text>
      </Card.Footer>
    </Card>
  );
}
export default Cards;
