import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import "./style.css"

function ProductCard (props) {

    const [quantity, setQuantity] = React.useState(1)

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


  <InputGroup className="inputGroup">
  <Card.Text className="float-left text-white mr-3">${props.price}</Card.Text>
    <FormControl
    className="quantityInputField float-right"
      type="number"
      min="1"
      max="9"
      placeholder="Qty"
      value={quantity}
      onChange={event => setQuantity(Number(event.target.value))}
    />

      <Button className="btn btn-outline-secondary btn-sm bg-white addToCart float-right">
        Add to Cart
      </Button>

      </InputGroup>
      </Card.Footer>
    </Card>

    )
}

export default ProductCard;