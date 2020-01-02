const Item = require("../models/Item");

//This list of items should be stored in a DB and asked by the client(The restaraunt) but
//using it directly from a list for demo purpose

const mainCategories = ["starters", "mainCourse", "Beverages", "Breads"];

//subCategories should also be asked by the client(The restaraunt) but making them randomly
//when adding items via the API

function getAllCategories(req, res, next) {
  res.status(200).send(mainCategories);
}

async function getCategoryItems(req, res, next) {
  const category = req.params.name;
  const categoryRegex = `^\/${category}\/\w*`;
  const items = await Item.find({
    category: { $regex: categoryRegex }
  });
  res.status(200).send(items);
}

// ^\/\w*\/main$

module.exports = {
  getAllCategories,
  getCategoryItems
};
