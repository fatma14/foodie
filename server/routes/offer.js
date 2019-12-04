const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userService = require("../services/user");
const Offer = require("../models/Offer");
const isAuthenticated = require("../middlewares/authorizations");

router.post("/offers", (req, res, next) => {
  userService
    .createOffer(req.body)
    .then(newOffer => {
      res.json(newOffer);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/offers", (req, res) => {
  const zip = req.params.zip;
  Offer.find({ "provider.username": "ramy" })
    .populate({ path: "provider", match: { username: "ramy" } })
    // .populate("provider")
    .limit(50)
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
      res.json(offerDetails);
    })
    .catch(err => {
      res.json(err);
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
