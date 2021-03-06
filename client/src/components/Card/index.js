import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";

function Cards(props) {
  return (
    <Card className="eachCard" style={{ flex: 1 }}>
      <Card.Img
        variant="top"
        className="cardImg zoom"
        data-id={props.id}
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <Card.Body>
        <Card.Title className="productTitle py-3 text-center">
          {" "}
          {props.name}{" "}
        </Card.Title>
        <Card.Text className="shortDesc">{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="footer">
        <Card.Text className="float-left">${props.price}</Card.Text>
        <Link to={`/product/${props.id}`}>
          <Button className="btn btn-sm bg-white float-right viewItem">
            View Item
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
export default Cards;
