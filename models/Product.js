const mongoose = require("mongoose");

const { String } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  orderQty:{
    type:Number,
    default:1
  },
  stockQty:{
    type: Number,
    default:5000
  },
  buyer:{
    type:Boolean,
    default:false
  }
});

const Products=mongoose.models.Product || mongoose.model("Product", ProductSchema);

module.exports = Products;
  
