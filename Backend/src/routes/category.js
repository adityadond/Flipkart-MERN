const express = require("express");
const router = express.Router();

const { addCategory, getCategories } = require("../controllers/category");
const { requiresignin, adminMiddleware } = require("../common-middleware");

router.post("/category/create", requiresignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategories);

module.exports = router;
