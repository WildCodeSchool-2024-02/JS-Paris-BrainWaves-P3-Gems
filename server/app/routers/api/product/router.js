const express = require("express");

const router = express.Router();

const {add} = require("../../../controllers/productActions");
const validateProduct = require("../../../services/product");

router.post("/",validateProduct, add);

module.exports = router;