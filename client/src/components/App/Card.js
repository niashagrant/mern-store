import React from 'react';
import Card from 'react-bootstrap/Card';

function Card (){

    return(

    <CardGroup>
        <Card>
          <Card.Img data-id={props.id} alt={props.name} key src={process.env.PUBLIC_URL + props.image}/>

          <Card.Body>

            <Card.Title>Card title</Card.Title>

                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>

          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    </CardGroup>

    )
}


export default Card;