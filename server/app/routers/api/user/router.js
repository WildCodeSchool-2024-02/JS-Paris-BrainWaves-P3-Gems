const express = require("express");

const router = express.Router();

const { add, browse } = require("../../../controllers/userActions");

const { login, refresh, logout } = require("../../../controllers/authActions");

const { hashPassword, verifyToken } = require("../../../services/auth");

const validateUser = require("../../../services/users");

router.get("/",verifyToken, browse);

router.get("/refresh", refresh);

router.post("/", validateUser, hashPassword, add);

router.post("/login", login);

router.get("/logout", logout);

router.use(verifyToken);

module.exports = router;
