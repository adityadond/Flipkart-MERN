const express = require("express");
const router = express.Router();
const {
  requiresignin,
  adminMiddleware,
} = require("../common-middleware/index");
const { createProduct } = require("../controllers/product");
const multer = require("multer");
const path = require("path");

const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requiresignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);

module.exports = router;
