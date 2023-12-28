const express = require("express");
const router = express.Router();

const { addCategory, getCategories } = require("../controllers/category");
const {
  requiresignin,
  adminMiddleware,
} = require("../common-middleware/index");
const path = require("path");
const multer = require("multer");

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
  "/category/create",
  requiresignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getcategory", getCategories);

module.exports = router;
