const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  surname: String,
  birthDate: Number,
  email: { type: String, unique: true, require: [true, "email is required"] },
  password: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
