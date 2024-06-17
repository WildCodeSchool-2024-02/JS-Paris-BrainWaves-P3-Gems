const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId, readProductByUser} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

router.get("/:id", readProductByUser)

router.get('/product-by-category/:id', readProductByCategoryId)


module.exports = router;