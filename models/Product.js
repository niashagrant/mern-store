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
  category1: {
    type: String,
    required: true,
  },
  category2: {
    type: String,
    required: true,
  },
  category3: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  stockQty: {
    type: Number,
    default: 5000,
  }
});

const Products =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

module.exports = Products;
