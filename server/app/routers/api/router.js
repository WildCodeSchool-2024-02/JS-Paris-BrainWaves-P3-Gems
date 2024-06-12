const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categoryRouter = require("./category/router")

router.use("/category", categoryRouter);
/* ************************************************************************* */

module.exports = router;
