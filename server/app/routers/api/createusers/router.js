const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/createUserActions");
const validateUser = require("../../../services/users")

router.post("/createAccount",validateUser, add );

module.exports = router;
