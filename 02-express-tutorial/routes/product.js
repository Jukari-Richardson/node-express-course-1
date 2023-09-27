const express = require("express");

const router = express.Router();

const {
  getProduct,
  getProductByID,
  getProductbySearch,
} = require("../controllers/product");

// HTTP GET methods with url routes connected to their specific controllers
router.get("/", getProduct);
// router.get("/api/v1/products/query", getProductbySearch);
// router.get("/api/v1/products/:productID", getProductByID);

module.exports = router;