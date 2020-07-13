var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
        products: [{
          product:{
            type: Schema.Types.ObjectId,
             ref: "Product",
          },
          orderQty:{
            type: Number
               } 
         }],
     
    email: {
      type: String,
     
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);


module.exports = Order;