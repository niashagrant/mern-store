const router = require("express").Router();
const productsController = require("../controllers/productsController.js");
const cartController = require("../controllers/cartController");

//route to our homepage and a get to get all the products in the database using the controller
// console.log("Do we see this???");

router.route("/allproducts").get(productsController.findAll);

router.route("/product/:ProductId").get(productsController.findOne);

router.route("/addToCart").post(cartController.create);

router.route("/userCart/:id")
.get(cartController.findAll);

router.route("/delFromCart/:id")
.delete(cartController.findOneAndDelete)

//Work in progress - trying to update quantity
router.route("/updateCartQty")
.put(cartController.findOneAndUpdate)

router.route("/completeCheckout")
.post(cartController.createOrder)

module.exports = router;
