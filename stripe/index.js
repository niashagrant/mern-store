// npm i stripe => back end to charge CC
// npm i @stripe/stripe-js => front end to load library
// npm i @stripe/react-stripe-js => new stripe elements for react package
// npm i axios => for post call from front end to back end

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod ({
            type: 'card',
            card: elements.getElement(cardElement)
        });

        if (!error){
            const { id } = paymentMethod;

            try {
                const response = await axios.post("/api/charge", {id, price})
                console.log(data);
            } catch (error){
                console.log(error);
            }
        }
    };

    return 
        <form 
            onSubmit={handleSubmit}
            style={{maxWidth: "400px", margin: "0 auto"}}
        >
            <CardElement/>
            <button type="submit" disabled={!loadStripe}>
                Pay
            </button>
        </form>

};

const stripePromise = loadStripe("pk_test_51Gu2XnBjpCoDu7KPlrPRWXlS3XmGbfSgZLmUyZKiG4wJbe4aC6uz7nR1ssUgOh86HGiggjEhr89X5ev31YTEnisJ00uOHX0UBd")
// publishable key meant to be public => this is not a secret key


const Stripe = () => {
    return 
        <Elements stripe = {stripePromise }>
            hello world!
        </Elements>
};

export default Stripe;


