import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./style.css"



function CartCard (props) {

  const [quantity, setQuantity] = useState(props.value);

    return (
    <Card className="eachCartCard"  key={props.mediaUrl} style={{flex: 1}}>
      <Card.Body>
      <Card.Img
        variant="top"
        className="cartImg float-left"
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      
        <Card.Title className="mt-4 cartItemName py-2"> {props.name} </Card.Title>
        <Card.Text className="font-italic">{props.description}</Card.Text>

      </Card.Body>
      <Card.Footer className="eachCartFooter">
      <Row>
      <InputGroup className="cartInputGroup">
      <Card.Text className="text-white ml-5">${props.price}</Card.Text>
      <Card.Text className="text-white qty">Quantity: </Card.Text>
      <FormControl
        className="cartQtyField"
        type="number"
        min="1"
        max="9"
        placeholder="Qty"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
        // quantity={props.currentValue}
        />
        {/* <Button  data-user={props.user} data-productid={props.id} onClick={props.handleButton} className="btn btn-outline-secondary btn-sm bg-white addToCart float-right">Add to Cart {props.buttonText}</Button> */}
        <Row className="d-flex justify-content-end w-100">
          {/* To update Qty - maybe add a update button here?  Or can we handle with window location reload?  */}
          <Button data-id={props.productid} onClick={()=>props.updateQty(props.id,quantity)} className="btn btn-sm bg-light text-dark delete mt-1 mr-1">
            Update Qty
          </Button>
          <Button  data-id={props.productid} onClick={props.deleteProd} className="btn btn-sm bg-light text-dark delete mt-1">
            Delete
          </Button>
        </Row>
      </InputGroup>
      </Row>
      </Card.Footer>
    </Card>
    )
}

export default CartCard;