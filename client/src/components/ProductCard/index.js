import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import "./style.css";

function ProductCard (props) {

    return (
    <Card className="eachProductCard" style={{flex: 1}}>
      <Card.Body>
      <Card.Img
        variant="top"
        className="productImg float-left"
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />

        <Card.Title className = "productTitle py-2 mt-4"> {props.name} </Card.Title>
        <Card.Text className="font-italic">{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="eachProductFooter">
      <Row>
      <InputGroup className="inputGroup">
      <Card.Text className="text-white ml-5 price">${props.price}</Card.Text>
      <Card.Text className="text-white productQty">Quantity: </Card.Text>
      <FormControl
        className="quantityInputField float-right"
        type="number"
        min="1"
        max="9"
        placeholder="Qty"
        value={props.value}
        onChange={props.onChange}
        />
        <Button  data-user={props.user} data-productid={props.id} onClick={props.handleButton} className="btn btn-outline-secondary btn-sm bg-white addToCart">Add to Cart {props.buttonText}</Button>
        </InputGroup>
        </Row>
        <Row className="d-flex justify-content-end">
        <Card.Text className="text-light font-italic userNote mr-2 pt-1 note">Sign-up to Add items to Cart</Card.Text>
        </Row>

      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
