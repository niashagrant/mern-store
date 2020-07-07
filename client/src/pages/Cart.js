import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";


function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);

    const loadThisCart = () => {
        if (!user) {
            alert("You must be signed in to add items to your cart.")
        } else {
            API.renderCart()
            .then(cartItems => {
                setCart(cartItems.data)
            })
        }
    }

    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Cart Page</h6>
            {cart.map(( element, index ) => 
                <CartCard
                id={element._id} 
                name={element.name} 
                image={element.mediaUrl} 
                price={element.price} 
                description={element.description}
                />
            )}
        </Container>
    )

}


export default Cart;

