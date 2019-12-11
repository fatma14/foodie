const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  offer: {
    type: Schema.Types.ObjectId,
    ref: "Offer"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
