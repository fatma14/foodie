const bcrypt = require("bcrypt");
const User = require("../models/User");
const Offer = require("../models/Offer");

function signup(username, password, address) {
  return User.findOne({ username: username }).then(found => {
    if (found) {
      throw new Error("USERNAME_ALREADY_EXIST");
    }
    return bcrypt
      .genSalt()
      .then(salt => {
        return bcrypt.hash(password, salt);
      })
      .then(hash => {
        return User.create({ username: username, password: hash, address });
      });
  });
}

function createOffer({
  name,
  description,
  price,
  quantity,
  coordinates,
  userId
}) {
  return Offer.create({
    name,
    description,
    price,
    quantity,
    coordinates,
    provider: userId
  });
}

module.exports = { signup, createOffer };
