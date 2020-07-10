const router = require("express").Router()
const stripe = require('stripe')('STRIPE_SECRET_KEY');


router.get("/", (req, res) => {
    res.send("test for stripe")
})

router.post("/payment", (req, res) => {
    const {product, token} = req.body;
    console.log("PRODUCT FOR STRIPE", product)
    console.log("RICE FOR STRIPE", product.price)
    const idempontencyKey = uuid()
    // idempontencyKey => makes sure customer is only charged once

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }) .then (customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

  module.exports = router



