const express = require("express");
const router = express.Router();
const itemController = require("../controller/ItemController");
router.route("/").post(itemController.addItem);
router.route("/:category").get(itemController.getItemByCategory);
module.exports = router;
