const router =require("express").Router()
const productsController= require("../controllers/productsController.js")

//route to our homepage and a get to get all the products in the database using the controller

router.route("/allproducts")
.get(productsController.findAll);


module.exports=router;