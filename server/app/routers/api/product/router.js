const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId, readProductByUser, deleteProductByUser,readSingleProduct,getFilter,getFromWishlist,showFromCheapestProduct,showFromBiggerProduct,readProductToValidate,
  validate, } = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");
const { verifyToken } = require("../../../services/auth");

router.post("/", verifyToken, validateProduct, add);

router.get("/user/:id",verifyToken, readProductByUser);

router.delete("/", verifyToken, deleteProductByUser);

router.get("/product-by-category/:id", readProductByCategoryId);
router.get("/single-Product/:id", readSingleProduct);
router.get("/searching_for_product", getFilter);
router.get("/product-to-validate", readProductToValidate);
router.put("/validate/:Id_product", validate);

router.delete("/", deleteProductByUser)

router.get('/product-by-category/:id', readProductByCategoryId)
router.get('/single-Product/:id', readSingleProduct)
router.get('/searching_for_product', getFilter)

router.get("/get-from-wishlist/:id", getFromWishlist)



router.get("/ascending-prices/:id", showFromCheapestProduct)
router.get("/descending-prices/:id", showFromBiggerProduct)

module.exports = router;
