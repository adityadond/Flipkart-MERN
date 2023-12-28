const express = require("express");
const router = express.Router();

const { addItemTocart } = require("../controllers/cart");
const { requiresignin, userMiddleware } = require("../common-middleware");

router.post(
  "/user/cart/addToCart",
  requiresignin,
  userMiddleware,
  addItemTocart
);

module.exports = router;
