const db= require("../models")

const cart={

    update: function(req,res){
        if (req.user) {
        db.Cart.update({user:req.user._id},{$push:{products: {quantity: req.body.quantity, product: req.body.productid}}} ,{upsert: true})
                                             //   {products: {quantity: req.body.quantity, product: req.body.productid}} 
        .then( () => res.sendStatus(200))
        .catch( () => res.sendStatus(403))
        }  else {
            res.sendStatus(403);
            console.log("cartController: User is not logged in.");
        }
    },

    findAll: function(req, res) {
        console.log(req.user)
        if (req.user) {
            db.Cart.find(req.query)
            .populate("products.product")  
            .then (cartdb => {
                console.log("this is our cart db",cartdb)
                res.json(cartdb)
            })
            .catch(error=> {
                console.log(error);
            })
        }   else {
            res.sendStatus(403);
            console.log("cartController: User is not logged in.");
        }
    }
}



module.exports=cart;