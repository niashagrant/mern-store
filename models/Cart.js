var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;
const Schema = mongoose.Schema // >>>>> NEW (Don't think I need???)

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  products: [
    {
    quantity: {
      type: Number,
      default: 1,
    },
    product: {
       type: Schema.Types.ObjectId, // >>>> was type: ObjectId (see below > line 31)
        ref: "Product",
      }
    }]
});

const Cart=mongoose.models.Cart || mongoose.model("Cart", CartSchema);
module.exports = Cart;


// products: [
//   {
//     quantity: {
//       type: Number,
//       default: 1,
//     },
//     product: {
//       type: ObjectId,
//       ref: "Product",
//     },
//   },
// ],