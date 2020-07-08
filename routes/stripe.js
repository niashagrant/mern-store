const router =require("express").Router()
const stripe = require('stripe')('sk_test_51H2jAhF6rrHNM5sksNEwuiEJ346yjze8Gtcn5ZI5gRrFWzsUEkPRbF9PYnF6QxnUFwMKpIbvMWXLDEVZI3WmnosE00tbrNGpWo');



router.post('/payment', async (req, res) => {

    // paymentIntent => track and handle all the states of the payment until it’s completed
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, 
        //NTS: add total products.price after working!!!!!!!!!!
        currency: 'usd',
        // // Verify your integration in this guide by including this parameter
        // metadata: {integration_check: 'accept_a_payment'},
        // receipt_email: email,
      });
      console.log("payment working!", paymentIntent)

      res.json({'client_secret': paymentIntent['client_secret']})
      //   client secret => used on the client side to securely complete the 
      //   payment process instead of passing the entire PaymentIntent object
  });

  module.exports = router



