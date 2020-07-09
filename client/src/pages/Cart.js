import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";

import CheckoutForm from '../components/CheckoutForm';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from '../components/Checkout';
import Success from '../components/Success';
import Canceled from '../components/Canceled';


function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {                           // added useEffect in which we call loadThisCart()
        console.log("user:", props)
        loadThisCart()
    }, []);
    
    const loadThisCart = () => {
        console.log("loadcart")
        if (!user) {
            alert("You must be signed in to add items to your cart.")
        } else {
            API.renderCart()
            .then(cartItems => {
                console.log("WORKING ON QUANTITY ISSUE: ", cartItems.data)
                console.log("back:", cartItems.data[0].products)
                setCart(cartItems.data[0].products)
                // setQuantity(cartItems.data[0].products[0].quantity)
           //   setCart(cartItems.data)
            })
        }
    }

    return (
        <>
        <Container className="col col-sm-1 col-md-10 col-centered">
            <h6>Cart Page</h6>
            {cart.map(( element ) =>{
                // console.log("this is our element:",element)
             return(  <CartCard
                key={element.product.mediaUrl}
                id={element._id} 
                name={element.product.name} 
                image={element.product.mediaUrl} 
                price={element.product.price} 
                description={element.product.description}
                value={element.quantity}
                // onChange={event => setQuantity(Number(event.target.value))}
                />) }
            )}
        </Container>
      
        <Router className="col col-sm-1 col-md-2 col-centered">
                <Switch>
                    <Route path="/success.html">
                        <Success />
                    </Route>

                    <Route path="/canceled.html">
                        <Canceled />
                    </Route>

                    <Route path="/">
                        <Checkout />
                    </Route>
                </Switch>
                <br/><br/>
                <CheckoutForm/>
        </Router>
        </>
    )

}


export default Cart;

