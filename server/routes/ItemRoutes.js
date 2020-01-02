const express = require("express");
const router = express.Router();
const itemController = require("../controller/ItemController");
router.route("/").post(itemController.addItem);

module.exports = router;
