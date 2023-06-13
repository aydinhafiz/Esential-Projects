const express = require("express");
const {
  getProducts,
  addNewProduct,
  getProduct,
  removeFeedback,
  updateFeedback,
} = require("../controllers/product-controller");

const router = express.Router();

router.route("/").get(getProducts).post(addNewProduct);

router
  .route("/:productId")
  .get(getProduct)
  .delete(removeFeedback)
  .patch(updateFeedback);

module.exports = router;
