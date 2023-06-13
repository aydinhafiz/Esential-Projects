const fs = require("fs");
const feedbackData = require("../models/product");

const path = require("path");

const productJsonData = fs.readFileSync(
  __dirname.replace("controllers", "products.json")
);

exports.getProducts = async function (req, res) {
  const products = await feedbackData
    .find({ category: "ui" })
    .select("title category");
  res.json({ status: "success", products });
};

exports.getProduct = async function (req, res) {
  const { productId } = req.params;

  const product = await feedbackData.findById(productId);

  res.json({ status: "success", product });
};

exports.addNewProduct = async function (req, res) {
  const newFeedback = {
    id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    upvotes: req.body.upvotes,
    status: req.body.status,
    description: req.body.description,
    comments: req.body.comments,
  };

  const feedback = await feedbackData.create(newFeedback);
  console.log(feedback);

  res.status(201).json({ status: "success" });
};

exports.removeFeedback = async function (req, res) {
  const { productId } = req.params;

  await feedbackData.findByIdAndDelete(productId);

  res.status(204).json({ status: "success" });
};

exports.updateFeedback = async function (req, res) {
  const { productId } = req.params;

  await feedbackData.findByIdAndUpdate(productId, {
    id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    upvotes: req.body.upvotes,
    status: req.body.status,
    description: req.body.description,
    comments: req.body.comments,
  });

  res.status(200).json({ status: "success" });
};
