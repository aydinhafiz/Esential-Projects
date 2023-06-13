const mongoose = require("mongoose");

const feedbackschema = new mongoose.Schema({
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [String],
});

const feedbackData = mongoose.model("feedback", feedbackschema);

module.exports = feedbackData;
