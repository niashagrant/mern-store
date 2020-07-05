import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard (props) {

    return (
    <Card className="eachCard" style={{flex: 1}}>
      <Card.Img
        variant="top"
        className="cardImg"
        data-id={props.id}
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="float-right">${props.price}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        
          <Button className="btn btn-outline-secondary btn-sm bg-white">Add to Cart</Button>
       
      </Card.Footer>
    </Card>

    )
}

export default ProductCard;