const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId, readProductByUser, deleteProductByUser,readSingleProduct,getFilter} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

router.get("/user/:id", readProductByUser)

router.delete("/", deleteProductByUser)

router.get('/product-by-category/:id', readProductByCategoryId)
router.get('/single-Product/:id', readSingleProduct)
router.get('/searching_for_product', getFilter)



module.exports = router;