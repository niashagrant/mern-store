const db = require("../models");

const cart = {
  create: function (req, res) {
    // console.log("adding to cart");
    // console.log(req.body);
    // res.end();

    if (req.user) {
      // console.log("this is our create rq.body", req.body);
      console.log("***********ADDING TO CART***********")
      db.Cart.findOneAndUpdate( 
      {
        user: req.user._id,
        product: req.body.productId
      },
      {$inc: {orderQty: req.body.quantity}
      })
        .then((cartProduct) => {
          console.log("THIS IS OUR CART PRODUCT ********: ", cartProduct)
          if (cartProduct === null) {
            console.log("<<<<<<<<<<<<<<<ADDING NEW PRODUCT TO OUR CART>>>>>>>>>>>>")
            db.Cart.create({
              user: req.user._id,
              product: req.body.productId,
              orderQty: req.body.quantity,
            })
          }
        }).then(() => {
          res.sendStatus(200);
        })
        .catch(() => {
          console.log("WHY CAN'T WE SEE OUR CONSOLE LOG FROM LINE 20?????????")
          res.sendStatus(403);
        });
    } else {
      res.sendStatus(403);
      console.log("cartController: User is not logged in.");
    }
  },

  findAll: function(req, res) {
      // console.log("this is what we want",req.user._id)
      if (req.user) {
          db.Cart.find({user:req.user._id})
          .populate("product")
          .then (cartdb => {
              // console.log("this is our cart db",cartdb)
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

  // Work in progress - trying to update quantity...
  findOneAndUpdate: function ( req, res) {
    console.log ("This is the req for our update Qty: ", req.body)
    if(req.user){
      db.Cart.findOneAndUpdate({_id:req.body.id},{orderQty:req.body.qty})
      .then((updated)=>{
        console.log( "our response when the qty gets updated:", updated)
        res.json(updated)
      }).catch(err=>{
        console.log(err);
        
      })
    }
  },

  createOrder: function(req,res){
    if(req.user){
      db.Cart.find({user:req.user._id})
      .then((res)=>{
        // console.log("this is our res", res)
        const order= res.map((element)=>{
          return {product:element.product, orderQty:element.orderQty}
        })
        console.log("This is our order",order)
        console.log("here comes the total", req.body ,typeof req.body)
        return db.Order.create({user:req.user._id,
                          products:order,
                          total:req.body.total})
        
      }).then(res=>{console.log("this our response from order create:", res)
          return db.Cart.remove({user:req.user._id})
                    
    }).then(deleted=> {
      console.log("DELETED", deleted)
      res.sendStatus(200)})
     
    }
  }

};

module.exports = cart;