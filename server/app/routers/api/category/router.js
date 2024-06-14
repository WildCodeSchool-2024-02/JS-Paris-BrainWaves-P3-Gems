const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse} = require("../../../controllers/categoryActions");

// Route to get a list of items
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
