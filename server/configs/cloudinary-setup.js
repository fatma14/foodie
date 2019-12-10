const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "foodie",
  allowedFormats: ["jpg", "png"],

  filename: function(req, res, cb) {
    console.log(res, process.env.cloudName);
    cb(null, res.originalname);
  }
});

const uploader = multer({ storage });
module.exports = uploader;
