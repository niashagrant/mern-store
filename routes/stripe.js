import Stripe from "stripe";
const stripe = new Stripe("sk_test_51Gu2XnBjpCoDu7KPb4XckH8AL5NvQkZaz8hXjIi4ZdrfOPidj0AnUtlyg3vsMeVvjwH6PSaG94CE9IAEbUcS2FNz00fkfBnCdN")
// NTS: hide secret Key!!!!! env var

export default async (req, res) => {
    const {id, amount} = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            payment_method: id,
            description: "hard coded test",
            confirm: true,
        });

        console.log(payment);

        return res.status(200).json({
            confirm: "abc123"
        });
    } catch (error){
    return res.status(400).json({
        message: error.message
        });
    }
};