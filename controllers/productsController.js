const db= require("../models")

const products={
    findAll: function(req,res){
        db.Products
        .find(req.query)
        .then(ProdDB=>{
            console.log(ProdDB)
        })
        .catch(err=>{
            console.log(err)
        })
    }
};

module.exports=products;