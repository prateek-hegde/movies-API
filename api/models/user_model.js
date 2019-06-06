const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
