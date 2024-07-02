const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId, readProductByUser, deleteProductByUser,readSingleProduct,getFilter,getFromWishlist,showFromCheapestProduct,showFromBiggerProduct } = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

router.get("/user/:id", readProductByUser)

router.delete("/", deleteProductByUser)

router.get("/user/:id", readProductByUser)

router.delete("/", deleteProductByUser)

router.get('/product-by-category/:id', readProductByCategoryId)
router.get('/single-Product/:id', readSingleProduct)
router.get('/searching_for_product', getFilter)

router.get("/get-from-wishlist/:id", getFromWishlist)



router.get("/ascending-prices/:id", showFromCheapestProduct)
router.get("/descending-prices/:id", showFromBiggerProduct)

module.exports = router;