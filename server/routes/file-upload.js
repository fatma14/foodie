const express = require("express");
const router = express.Router();

const uploader = require("../configs/cloudinary-setup");

router.post("/upload", (req, res, next) => {
  uploader.single("imageUrl")(req, res, next);
  console.log("heeeeey");
  if (!req.file) {
    // next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
