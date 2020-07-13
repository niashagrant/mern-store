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
    <Card className="eachProductCard w-75 m-auto"  key={props.mediaUrl} style={{flex: 1}}>
      <Card.Body className="mt-3">
      <Card.Img
        variant="top"
        className="cartPageImg float-left"
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <Row>
      <Card.Title className="cartPageTitle float-left ml-5 mb-1 mb-0"> {props.name} </Card.Title>
      </Row>
      <Row>
      <Card.Text className="float-left ml-5 mt-1 mb-2">{props.description}</Card.Text>
      </Row>
      <Row>
      <Card.Text className="cartPagePrice ml-5 float-right border-top border-muted py-2">${props.price} /each</Card.Text>
      </Row>
      </Card.Body>
      <Card.Footer className="eachProductFooter">
      <Row className="d-flex justify-content-end w-100">
      <InputGroup className="cartInputGroup">
        <Card.Text className="mr-2 ml-5 mt-3 totalQty">
        Total Qty:
        </Card.Text>
      <FormControl
        className="updateQtyInCart float-right"
        type="number" 
        min="1"
        max="9"
        placeholder="Qty"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <Button data-id={props.productid} onClick={()=>props.updateQty(props.id,quantity)} className="btn btn-sm bg-light text-dark delete updateQty">
          Update Qty
        </Button>
        <h6 className="mt-3 ml-1">||</h6>
        <Button  data-id={props.productid} onClick={props.updateThisCart} className="btn btn-sm bg-light text-dark delete deleteFromCart">
          Delete Product
        </Button>
        </InputGroup>
        </Row>
      </Card.Footer>
    </Card>
    )
}

export default CartCard;