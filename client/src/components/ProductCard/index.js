import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import "./style.css";

function ProductCard(props) {
  return (
    <Card className="eachProductCard mb-5" style={{ flex: 1 }}>
      <Card.Body>
        <Card.Img
          variant="top"
          className="productPageImg float-left mr-4 zoom2"
          alt={props.name}
          src={process.env.PUBLIC_URL + props.image}
        />

        <Card.Title className="pb-3 mt-5 productPageTitle">
          {" "}
          {props.name}{" "}
        </Card.Title>
        <hr/>
        <Card.Text className="pt-3">{props.description}</Card.Text>
        {/* <Card.Text>{props.description2}</Card.Text> */}
      </Card.Body>
      <Card.Footer className="eachProductFooter mt-3">
        <InputGroup className="inputGroup">
          <Card.Text className="float-left productPagePrice">
            ${props.price}
          </Card.Text>
          <FormControl
            className="quantityInputField float-right"
            type="number"
            placeholder="1"
            min="1"
            max="9"
            // placeholder="Qty"
            // value={props.value}
            onChange={props.onChange}
          />
          <Button
            data-user={props.user}
            data-productid={props.id}
            onClick={props.handleButton}
            className="btn btn-sm addToCart ml-1"
          >
            Add to Cart
          </Button>
        </InputGroup>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
