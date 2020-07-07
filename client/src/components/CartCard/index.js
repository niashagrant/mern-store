import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css"



function CartCard (props) {

    return (
    <Card className="eachProductCard" style={{flex: 1}}>
      <Card.Img
        variant="top"
        className="cardImg"
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>{props.description}</Card.Text>

      </Card.Body>
      <Card.Footer className="eachProductFooter">
      <Card.Text className="float-left text-white">${props.price}</Card.Text>
          <Button className="btn btn-outline-secondary btn-sm bg-white addToCart float-right">Add to Cart</Button>
       
      </Card.Footer>
    </Card>

    )
}

export default CartCard;