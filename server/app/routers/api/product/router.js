const express = require("express");

const router = express.Router();

const {add,readProductByCategoryId, readProductByUser, deleteProductByUser} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

router.get("/user/:id", readProductByUser)

router.delete("/user/:id", deleteProductByUser)

router.get('/product-by-category/:id', readProductByCategoryId)


module.exports = router;