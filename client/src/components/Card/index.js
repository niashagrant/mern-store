import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import "./style.css";
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
            <Card.Body className="text-center">
              <Card.Title> {props.name} </Card.Title>
              <Card.Text>${props.price}</Card.Text>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">QUEENS!!!</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </Col>
    </>

    //====================== Jen's code ===================

    // <Card className="eachCard" style={{flex: 1}}>
    //   <Card.Img
    //     variant="top"
    //     className="cardImg"
    //     data-id={props.id}
    //     alt={props.name}
    //     src={process.env.PUBLIC_URL + props.image}
    //   />
    //   <Card.Body>
    //     <Card.Title> {props.name} </Card.Title>
    //     <Card.Text>{props.description}</Card.Text>

    //   </Card.Body>
    //   <Card.Footer className="footer">
    //   <Card.Text className="float-left text-white">${props.price}</Card.Text>
    //     <Link to={`/product/${props.id}`}>
    //       <Button className="btn btn-outline-secondary btn-sm bg-white float-right viewItem">View Item</Button>
    //     </Link>
    //   </Card.Footer>
    // </Card>
  );
}
export default Cards;
