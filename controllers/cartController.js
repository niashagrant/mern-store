const db= require("../models")

const cart={

    create: function(req,res){
        if (req.user) {
            console.log("this is our create rq.body",req.body)
            console.log("this is our req.body.name:", req.body.name);
            
        db.Products.create({
            name: req.body.name,
            price:req.body.price,
            description:req.body.description,
            mediaUrl:req.body.mediaUrl,
            buyer: true

        } )
                                            //   {products: {quantity: req.body.quantity, product: req.body.productid}} 
        .then( (userAdded) =>{
            console.log("this is our .then response user Added:",userAdded)
            res.sendStatus(200)
            console.log("do we have a user here?", req.user)
            return db.Cart.updateOne({user:req.user._id},{$push:{product:userAdded._id}},{upsert:true}) 
        }) 
        .catch( (err) => {
            console.log(err)
            res.sendStatus(403)})
        }  else {
            res.sendStatus(403);
            console.log("cartController: User is not logged in.");
        }
    },

    // findAll: function(req, res) {
    //     console.log(req.user)
    //     if (req.user) {
    //         db.Cart.find(req.query)
    //         .populate("products")  
    //         .then (cartdb => {
    //             console.log("this is our cart db",cartdb)
    //             res.json(cartdb)
    //         })
    //         .catch(error=> {
    //             console.log(error);
    //         })
    //     }   else {
    //         res.sendStatus(403);
    //         console.log("cartController: User is not logged in.");
    //     }
    // },

    // findOneAndUpdate: function(req,res){
    //     if(req.user){
    //         db.Cart.findOneAndUpdate({user:req.user._id},{$pull:{products: {quantity: req.body.quantity, product: req.body.productid}}})
    //         .then(cartdb =>{
    //             console.log("this item was deleted", cartdb);
    //             res.json(cartdb)
    //         })
    //         .catch(error=> {
    //             console.log(error);
    //          })
    //      }
    //      else {
    //         res.sendStatus(403);
    //         console.log("cartController: User is not logged in.");
    //     }

    // }
}



module.exports=cart;