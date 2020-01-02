const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Add validations later

const OrderSchema = new Schema({
  status: {
    type: String,
    enum: [
      "placed",
      "accepted",
      "declined",
      "processed",
      "onTheWay",
      "delivered"
    ],
    required: true
  },
  items: [
    {
      item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item"
      },
      quantity: {
        type: Number
      },
      price: Number
    }
  ],
  //totalPrice can be a virtual member but to save computation time, making it a regular member
  totalPrice: {
    type: Number
  }
});

const Order = new mongoose.model("Order", OrderSchema, "orders");

module.exports = Order;
