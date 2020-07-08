const router =require("express").Router()
const productsController= require("../controllers/productsController.js");
const cartController= require("../controllers/cartController");

//route to our homepage and a get to get all the products in the database using the controller

router.route("/allproducts")
.get(productsController.findAll);

router.route("/product/:ProductId")
.get(productsController.findOne);

router.route("/addToCart")
.put(cartController.update);

router.route("/userCart")
.get(cartController.findAll);


module.exports=router;