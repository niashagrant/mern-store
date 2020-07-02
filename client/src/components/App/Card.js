import React from 'react';
import Card from 'react-bootstrap/Card';

function Card (props) {
    return (
    <>
    {props.product.map(
        ( product ) => {
    return (
        <CardGroup>
            <Card>
            <Card.Img data-id={product.id} alt={product.name} key src={process.env.PUBLIC_URL + product.image}/>
            <Card.Body>
                <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
        </CardGroup>
        )}
    )}
    </>
    )
}
export default Card;