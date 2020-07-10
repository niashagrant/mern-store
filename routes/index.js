const router = require("express").Router();
const appRoutes = require("./appRoutes");
const userAuth = require("./userAuth");
const stripe = require("./stripe")

router.use("/", appRoutes);
router.use("/", userAuth);
router.use("/", stripe);

module.exports = router;
