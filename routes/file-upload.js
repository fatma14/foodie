const express = require("express");
const router = express.Router();

const uploader = require("../configs/cloudinary-setup");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    res.status(400).send({ error: "No file uploaded" });
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
