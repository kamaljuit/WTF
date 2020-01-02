const express = require("express");
const router = express.Router();
const categoryController = require("../controller/CategoryController");
router.route("/").get(categoryController.getAllCategories);
router.route("/:name").get(categoryController.getCategoryItems);

module.exports = router;
