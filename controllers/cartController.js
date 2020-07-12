const db = require("../models");

const cart = {
  create: function (req, res) {
    // console.log("adding to cart");
    // console.log(req.body);
    // res.end();

    if (req.user) {
      console.log("this is our create rq.body", req.body);
      // console.log("THIS IS OUR PRODUCTSEARCH: ", req.body.productId)
      const productSearch = db.Cart.findOne(req.body.productId) 
      console.log("TROUBLESHOOTING WITH NATHANIAL - THIS IS USER SELECTION:", req.body.productId);

      // function cartItems (req, res) {
      //   console.log("HOW ABOUT REQ.USER?????:", req.user)
      //   console.log("THIS IS OUR USER'S ID: ", {user:req.user._id})
      //   console.log("this is what we want",req.user._id)
            db.Cart.find({user:req.user._id})
            .then (cartdb => {
              console.log("THIS IS OUR CARTDB: ", cartdb)
                res.json(cartdb)
            })
            .catch(error=> {
                console.log(error);
            })
    }
      // cartItems();
      // if(req.body.productId !== null) {
      //   console.log("IS OUR IF BEHAVING????")
      db.Cart.create({
        user: req.user._id,
        product: req.body.productId,
        orderQty: req.body.quantity,
      })
        .then(() => {
          res.sendStatus(200);
        })
        .catch(() => {
          res.sendStatus(403);
        })
    //   } else {
    //     console.log("OR ELSE??????")
    //     db.Cart.findByIdAndUpdate({_id:req.body.productId},{orderQty:req.body.quantity})
    //     .then(() => {
    //       res.sendStatus(200);
    //     })
    //     .catch(() => {
    //       res.sendStatus(404);
    //     })
    //   }
    // } else {
    //   res.sendStatus(403);
    //   console.log("cartController: User is not logged in.");
    // }
  },

  //Show all products in the user's cart
  findAll: function(req, res) {
      console.log("this is what we want",req.user._id)
      if (req.user) {
          db.Cart.find({user:req.user._id})
          .populate("product")
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
  },

  // Delete a product
  findOneAndDelete: function(req,res){
      console.log("this is the req from delete", req)
      if(req.user){
          console.log("this is what we want to delete", req.params.id)
          const itemToRemove= req.params.id
          db.Cart.findByIdAndDelete(itemToRemove)
          .then(cartdb =>{
              console.log(" was this item was deleted?", cartdb);
              res.json(cartdb)
          })
          .catch(error=> {
              console.log(error);
           })
       }
       else {
          res.sendStatus(403);
          console.log("cartController: User is not logged in.");
      }
  },

  // Update the product's Quantity
  findOneAndUpdate: function ( req, res) {
    console.log ("This is the req for our update Qty: ", req.body)
    if(req.user){
      db.Cart.findOneAndUpdate({_id:req.body.id},{orderQty:req.body.qty})
      .then(()=>{
        res.sendStatus(200)
      }).catch(err=>{
        console.log(err);
        
      })
    }
  }

};

module.exports = cart;
