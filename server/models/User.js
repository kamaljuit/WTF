const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Add validations later

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  profileImg: {
    type: String
  },
  previouslyCompletedOrders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item"
    }
  ],
  newOrders: []
});
