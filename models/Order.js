var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
        product: {
          type: ObjectId,
          ref: "Product",
        },
     
    email: {
      type: String,
      required: true,
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