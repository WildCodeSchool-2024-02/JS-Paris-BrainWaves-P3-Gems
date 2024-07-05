const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

const productRouter = require("./product/router");

router.use("/product", productRouter);

const userRouter = require("./user/router");

router.use("/user", userRouter);

const wishlistRouter = require("./wishlist/router")

router.use('/wishlist', wishlistRouter)

/* ************************************************************************* */

module.exports = router;
