import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./style.css"



function CartCard (props) {

    return (
    <Card className="eachProductCard"  key={props.mediaUrl} style={{flex: 1}}>
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
      <Card.Text className="float-left text-white">${props.price}</Card.Text>
      <FormControl
        className="quantityInputField float-right"
        type="number"
        min="1"
        max="9"
        placeholder="Qty"
        value={props.value}
        quantity={props.currentValue}
        />
        {/* <Button  data-user={props.user} data-productid={props.id} onClick={props.handleButton} className="btn btn-outline-secondary btn-sm bg-white addToCart float-right">Add to Cart {props.buttonText}</Button> */}
        <Row className="d-flex justify-content-end w-100">
          <Button className="btn btn-sm bg-light text-dark delete mt-1">Delete</Button>
        </Row>
      </InputGroup>
       
      </Card.Footer>
    </Card>

    )
}

export default CartCard;