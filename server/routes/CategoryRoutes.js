const express = require("express");
const router = express.Router();
const categoryController = require("../controller/CategoryController");

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.addNewCategory);

router.route("/:name").get(categoryController.getCategoryItems);

module.exports = router;
