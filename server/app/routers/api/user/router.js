const express = require("express");

const router = express.Router();

const { add,  browse } = require("../../../controllers/userActions");

const { login } = require("../../../controllers/authActions");

const { hashPassword, verifyToken } = require("../../../services/auth");

const validateUser = require("../../../services/users");

router.get("/", browse);

router.post("/", validateUser, hashPassword, add);

router.post("/login", login);

router.use(verifyToken);

module.exports = router;
