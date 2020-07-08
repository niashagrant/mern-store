// npm i stripe => back end to charge CC
// npm i @stripe/stripe-js => front end to load library
// npm i @stripe/react-stripe-js => new stripe elements for react package
// npm i axios => for post call from front end to back end

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ success }) => {
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
                const response = await axios.post("/api/charge", {id, amount: 1099})
                console.log(data);
                success();
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
            <h2> price: $10.99 USD </h2>
            <img
                src="https://i.etsystatic.com/7863296/r/il/bf7686/2411847453/il_1588xN.2411847453_trsm.jpg"
                style={{ maxWidth: "50px" }}
            />

            <CardElement/>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>

};

const stripePromise = loadStripe("pk_test_51Gu2XnBjpCoDu7KPlrPRWXlS3XmGbfSgZLmUyZKiG4wJbe4aC6uz7nR1ssUgOh86HGiggjEhr89X5ev31YTEnisJ00uOHX0UBd")
// publishable key meant to be public => this is not a secret key


const Stripe = () => {
    const [status, setStatus] = React.useState("ready");

    if (status === "success") {
        return 
            <div>
                Thank you for your purchase!
            </div>
    }

    return 
        <Elements stripe = {stripePromise }>
            <CheckoutForm
                success={() => {
                    setStatus("success");
                }}
            />
        </Elements>
};

export default Stripe;


