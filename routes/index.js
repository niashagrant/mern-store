const router = require("express").Router();
const productRoutes = require("./appRoutes");
const userAuth = require("./userAuth");
const stripe = require("./stripe")

router.use("/", productRoutes);
router.use("/", userAuth);
router.use("/", stripe);

module.exports = router;
