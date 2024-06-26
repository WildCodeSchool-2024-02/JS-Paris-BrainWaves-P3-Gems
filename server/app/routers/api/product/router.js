const express = require("express");

const router = express.Router();

const {
  add,
  browse,
  readProductByCategoryId,
  readProductByUser,
  deleteProductByUser,
  readSingleProduct,
  getFilter,
  readProductToValidate,
  validate,
} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/", validateProduct, add);

router.get("/", browse);
router.get("/user/:id", readProductByUser);
router.delete("/", deleteProductByUser)
router.get("/product-by-category/:id", readProductByCategoryId);
router.get("/single-Product/:id", readSingleProduct);
router.get("/searching_for_product", getFilter);
router.get("/product-to-validate", readProductToValidate);
router.put("/validate/:Id_product", validate);

module.exports = router;
