import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Cards (props) {
    // return (
    // <>
    // {props.product (
    //     ( product ) => {
    return (
        <CardGroup>
            <Card>
            <Card.Img data-id={props.id} alt={props.name} key src={process.env.PUBLIC_URL + props.image}/>
            <Card.Body>
                <Card.Title> {props.name} </Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">QUEENS!!!</small>
            </Card.Footer>
            </Card>
        </CardGroup>
        // )
    // }
    // )}
    // </>
    )
}
export default Cards;