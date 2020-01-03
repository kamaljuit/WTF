const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
    // unique: true
  },
  subCategories: [
    {
      type: String
    }
  ]
});

const Category = new mongoose.model("Category", CategorySchema, "categories");

module.exports = Category;
