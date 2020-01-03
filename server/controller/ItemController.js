const Item = require("../models/Item");
const Category = require("../models/Category");
//add new item to the DB
/*
name
img
rating
ratingsAverage
numberOfRatings
price
category
isVeg
*/

//check the availability of the category and subCategory and then add item
async function addItem(req, res, next) {
  try {
    let exists = false;
    const category = req.body.category;
    const subCategory = req.body.subCategory;
    const categoryDB = await Category.findOne({ name: category });
    if (categoryDB) {
      exists = categoryDB.subCategories.includes(subCategory);
    }

    if (!exists)
      return res.status(400).json({
        status: "fail",
        message: "Provided Category or SubCategory does not exist",
        data: null
      });

    const item = req.body;
    item.category = `/${category}/${subCategory}`;
    const savedItem = await Item.create(item);
    res.status(201).json({
      status: "success",
      data: savedItem
    });
  } catch (error) {
    next(error);
  }
}

async function getItemByCategoryHelper(category = null) {
  //   const subCategoryRegex = `^\/\w*\/${subCategory}$`;
  if (category) var categoryRegex = `^\/${category}\/\w*`;

  return getItemByCategory;
}

async function getItemByCategory(req, res, next) {
  if (req.params.category) {
    var category = req.params.category;
    if (category === "homescreen") {
      const items = await Item.find({});
      const data = {
        todaySpecial: items,
        chefSpecial: items,
        previousOrders: items
      };
      return res.status(200).send({
        status: "success",
        data: data
      });
    } else {
      const categoryDB = await Category.findOne({ name: category });
      const subCategories = categoryDB.subCategories;
      if (subCategories.length === 0) {
        return res.status(200).json({
          status: "success",
          data: null
        });
      }
      console.log(subCategories, "sub");

      const subCategoriesData = await Promise.all(
        subCategories.map(sub => {
          var categoryRegex = `^\/${category}\/${sub}`;
          return new Promise((resolve, reject) => {
            Item.find({
              category: { $regex: categoryRegex }
            }).then(data => {
              resolve({
                name: sub,
                items: data
              });
            });
          });
        })
      );
      console.log(subCategoriesData, "data");
      //Save subcategories in the categories document

      const data = {
        name: category,
        subCategories: subCategoriesData
      };
      return res.status(200).json({
        status: "success",
        data: data
      });
    }
  }
}

module.exports = {
  addItem,
  getItemByCategory,
  getItemByCategoryHelper
};
