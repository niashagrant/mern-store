const router =require("express").Router()
const productsController= require("../controllers/productsController.js")

//route to our homepage and a get to get all the products in the database using the controller

router.route("/allproducts")
.get(productsController.findAll);

router.route("/product/:ProductId")
.get(productsController.findOne);


module.exports=router;