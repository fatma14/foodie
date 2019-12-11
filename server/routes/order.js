const express = require("express");
const router = express.Router();
const OrderModel = require("../models/Order");
const UserModel = require("../models/User");
const OfferModel = require("../models/Offer");

router.post("/orders", (req, res, next) => {
  const { offerId, userId } = req.body;
  Promise.all([OfferModel.findById(offerId), UserModel.findById(userId)])
    .then(([offer, user]) => {
      if (!offer || !user) {
        res.status(400).json({ error: "offer or user is not existing" });
      } else {
        return OrderModel.findOne({ offer: offerId, user: userId }).then(
          response => {
            console.warn("###############", response);
            if (response) {
              res.status(400).json({ error: "offer already reserved" });
            } else {
              return OrderModel.create({
                user,
                offer
              });
            }
          }
        );
      }
    })
    .then(order => {
      res.json(order);
    })
    .catch(err => {
      console.warn(err);
      res.status(500).json({ error: err });
    });
});

router.get("/orders", (req, res) => {
  const { offerId } = req.query;
  if (!offerId) {
    res.status(400).json({ error: "offerId is missing" });
    return;
  }
  OrderModel.find({ offer: offerId })
    .then(orders => {
      res.json({ orders });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
