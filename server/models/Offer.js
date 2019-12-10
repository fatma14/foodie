const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  name: String,
  price: Number,
  pictures: [String],
  description: String,
  quantity: String,
  tagline: String,
  coordinates: [Number],
  provider: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;
