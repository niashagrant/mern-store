var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  products: [
    {
      quanity: {
        type: Number,
        default: 1,
      },
      product: {
        type: ObjectId,
        ref: "Product",
      },
    },
  ],
});

const Cart=mongoose.models.Cart || mongoose.model("Cart", CartSchema);
module.exports = Cart;
