const Item = require("../models/Item");

async function addItem(req, res, next) {
  try {
    const item = req.body;
    const savedItem = await Item.create(item);
    res.status(201).send(savedItem);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addItem
};
