const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const router = express.Router();
const Product = require("../models/product");

router.post("/product/create", requireSignin, adminMiddleware, (req, res) => {
  // res.status(200).json({file:req.files,body:req.body});
  const { name, price, description, category, quantity, createdBy } = req.body;
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const product = new Product({
    name: name,
    slug: name.replace(/ /g, "-"),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
});
module.exports = router;
