const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

const productRouter = require("./product/router");

router.use("/product", productRouter);

const createUser = require("./createusers/router");

router.use("/user", createUser);

/* ************************************************************************* */

module.exports = router;
