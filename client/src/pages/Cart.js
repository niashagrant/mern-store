import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";

// import CheckoutForm from '../components/CheckoutForm';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Checkout from '../components/Checkout';
// import Success from '../components/Success';
// import Canceled from '../components/Canceled';
import StripeCheckout from "react-stripe-checkout"

function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [quantity, setQuantity] = useState(1);

    // TO DO: update with product in store vs hard coded!!!
    const [product, setProduct] = useState ({
        name: "FBC Women's T-Shirt",
        price: 24,
        productBy: "Queen St. Market"
    })

    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => {
            console.log("RESPONSE", response)
            const {status} = response;
            console.log("STATUS", status)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => { // added useEffect in which we call loadThisCart()
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
        <Container className="col col-sm-1 col-md-8 col-centered">
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
      
       
        <StripeCheckout className="col col-sm-1 col-md-4 col-centered"
                stripeKey="pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t"
                token={makePayment}
                name= "Queen St. Market"
                amount={product.price * 100}
                shippingAddress
                billingAddress
                image="https://res.cloudinary.com/lindseytummond/image/upload/v1594364031/FBC_this_could_ilsybo.png"
        >
             <button variant="primary" size="lg" block>
                Purchase Total: ${product.price}
                {/* comes from state on line 23 */}
            </button>
        </StripeCheckout>
        </>
    )

}


export default Cart;

