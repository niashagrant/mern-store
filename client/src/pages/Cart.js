import React from 'react';
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";


function Cart(props) {


    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Cart Page</h6>
            <CartCard/>
        </Container>
    )

}


export default Cart;
