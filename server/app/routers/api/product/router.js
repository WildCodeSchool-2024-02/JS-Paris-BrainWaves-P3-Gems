const express = require("express");

const router = express.Router();

const {
  add,
  readProductByCategoryId,
  readProductByUser,
  deleteProductByUser,
  readSingleProduct,
  getFilter,
} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");
const { verifyToken } = require("../../../services/auth");

router.post("/", verifyToken, validateProduct, add);

router.get("/user/:id", readProductByUser);

router.delete("/", verifyToken, deleteProductByUser);

router.get("/user/:id", verifyToken, readProductByUser);

router.get("/product-by-category/:id", readProductByCategoryId);
router.get("/single-Product/:id", readSingleProduct);
router.get("/searching_for_product", getFilter);
router.use(verifyToken);

module.exports = router;
