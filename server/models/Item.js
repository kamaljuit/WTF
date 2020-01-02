const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Add validations later

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20
    },
    img: {
      type: String
    },
    //New raiting of the item which helps to calculate the avg rating
    rating: {
      type: Number
    },
    ratingsAverage: {
      type: Number,
      default: 0
    },
    numberOfRatings: {
      type: Number,
      default: 0
    },
    price: {
      type: Number
    },

    //Format of category: /mainCategory/subCategory
    category: {
      type: String,
      required: true
    },
    isVeg: {
      type: Boolean,
      default: true
    }
  },
  {
    validateBeforeSave: true,
    timestamps: true,
    autoIndex: true
  }
);

const Item = new mongoose.model("Item", ItemSchema, "items");

module.exports = Item;
