const db= require("../models")

const products={
    findAll: function(req,res){
        // console.log('all product route being hit!')
        db.Products
        .find(req.query)
        .then(ProdDB=>{
            console.log(ProdDB)
            res.json(ProdDB)
        })
        .catch(err=>{
            console.log(err)
        })
    },

    findOne: function(req, res) {
        db.Products
        .findOne(req.params._id)
        .then(oneProdDb => {
            console.log("This is our consolelog")
            console.log(oneProdDb)
            res.json(oneProdDb)
        })
        .catch(err=>{
            console.log(err)
        })
    }
};

module.exports=products;