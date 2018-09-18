const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model
const UserSchema = new Schema({
  id: String,
  fullName: String,
  username: String,
  avatar: String,
  email: String
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
