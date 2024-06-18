const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

router.get('/product-by-category/:id', readProductByCategoryId)


module.exports = router;