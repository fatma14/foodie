const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userService = require("../services/user");
const Offer = require("../models/Offer");
const Order = require("../models/Order");
const isAuthenticated = require("../middlewares/authorizations");

router.post("/offers", (req, res, next) => {
  userService
    .createOffer(req.body)
    .then(newOffer => {
      res.json(newOffer);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/offers", (req, res) => {
  const { swLat, swLng, neLat, neLng } = req.query;
  const page = req.params.page || 0;
  Offer.find({
    coordinates: {
      $geoWithin: {
        $box: [
          [swLng, swLat],
          [neLng, neLat]
        ]
      }
    }
  })
    .populate("provider")
    .skip(page * 10)
    .limit(10)
    .then(offer => {
      res.json(offer);
    });
});

router.get("/offers/:id", (req, res) => {
  const offerId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(offerId)) {
    res.status(400).json({ message: "OfferId is not valid" });
    return;
  }

  Offer.findById(req.params.id)
    .then(offerDetails => {
      return Order.find({ offer: offerDetails._id }).then(orders => {
        res.json({ offerDetails, orders });
      });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.put("/offers/:id", (req, res, next) => {
  Offer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/offers/:id", (req, res, next) => {
  Offer.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
