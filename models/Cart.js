var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;
const Schema = mongoose.Schema; // >>>>> NEW (Don't think I need???)

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId, // >>>> was type: ObjectId (see below > line 31) || Also removed quantity (see below > line 26)
    ref: "Product",
  },
  orderQty: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
module.exports = Cart;
