const db= require("../models")

const cart={

    update: function(req,res){
        if (req.user) {
        db.Cart.update({user:req.user._id},{$push:{products: {quantity: req.body.quantity, product: req.body.productid}}}, {upsert: true})
        .then( () => res.sendStatus(200))
        .catch( () => res.sendStatus(403))
        }  else {
            res.sendStatus(403);
            console.log("Line 11 of cartController: User is not logged in.");
        }
    },

    findAll: function(req, res) {
        console.log("CONNECT THE CART ROUTE!")
        if (req.user) {
            db.Cart.find(req.query)
            .then (cartdb => {
                res.json(cartdb)
                console.log(cartdb)
            })
            .catch(error=> {
                console.log(error);
            })
        }   else {
            res.sendStatus(403);
            console.log("Line 28 of cartController: User is not logged in.");
        }
    }
}



module.exports=cart;