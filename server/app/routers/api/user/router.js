const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/userActions");
const validateUser = require("../../../services/users")

router.post("/",validateUser, add );

module.exports = router;
