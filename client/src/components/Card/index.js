import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./style.css";
import Col from "react-bootstrap/Col";

function Cards(props) {
  return (
    <>
      <Col sm={4}>
        <CardGroup style={{ width: "21rem" }}>
          <Card className="mt-5">
            <Card.Img
              data-id={props.id}
              alt={props.name}
              key
              src={process.env.PUBLIC_URL + props.image}
              style={{ width: "20rem" }}
            />
            <Card.Body>
              <Card.Title> {props.name} </Card.Title>
              <Card.Text>{props.price}</Card.Text>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">QUEENS!!!</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </Col>
    </>
  );
}
export default Cards;
