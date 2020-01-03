const Item = require("../models/Item");
const Category = require("../models/Category");
//This list of items should be stored in a DB and asked by the client(The restaraunt) but
//using it directly from a list for demo purpose

//subCategories should also be asked by the client(The restaraunt) but making them randomly
//when adding items via the API

async function getAllCategories(req, res, next) {
  const category = await Category.find();
  res.status(200).json({
    status: "success",
    data: category
  });
}

//Add a new Category and a subCategory
//TODO ==> validate for subCategory uniqueness

async function addNewCategory(req, res, next) {
  const newCategory = req.body.category;
  if (!newCategory)
    return res.status(500).send({
      status: "fail",
      data: null
    });
  var subCategories = req.body.subCategories || null;
  const categoryArray = await Category.find({ name: newCategory });
  var category = categoryArray[0];

  if (category && subCategories) {
    if (Array.isArray(subCategories)) {
      subCategories.forEach(item => {
        category.subCategories.push(item);
      });
    } else {
      category.subCategories.push(subCategories);
    }
    console.log(category, subCategories);
    try {
      await category.save();
    } catch (error) {
      console.log(error);
    }

    return res.status(201).json({
      status: "success",
      data: category
    });
  } else {
    if (category > 0 && !subCategories) {
      return res.status(201).json({
        status: "success",
        data: category
      });
    } else {
      if (subCategories) {
        if (Array.isArray(subCategories)) {
          var category = await Category.create({
            name: newCategory,
            subCategories: subCategories
          });
        } else {
          var category = await Category.create({
            name: newCategory,
            subCategories: [subCategories]
          });
        }
      } else
        var category = await Category.create({
          name: newCategory
        });

      return res.status(201).json({
        status: "success",
        data: category
      });
    }
  }
}

async function getCategoryItems(req, res, next) {
  const category = req.params.name;
  const categoryRegex = `^\/${category}\/\w*`;
  const items = await Item.find({
    category: { $regex: categoryRegex }
  });
  res.status(200).json({
    status: "success",
    data: items
  });
}

// async function addNewCategory

//async function addNewSubCategory

module.exports = {
  getAllCategories,
  getCategoryItems,
  addNewCategory
};
