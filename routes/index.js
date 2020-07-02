const router =require("express").Router()
const productRoutes= require ("./homePage")

router.use("/", productRoutes)

module.exports=router;