const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  address: {
    street: String,
    city: String,
    zip: Number
  },
  isProvider: Boolean
});

const User = mongoose.model("User", userSchema);
module.exports = User;
