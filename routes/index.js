const router = require("express").Router();
const appRoutes = require("./appRoutes");
const userAuth = require("./userAuth");

router.use("/", appRoutes);
router.use("/", userAuth);

module.exports = router;
