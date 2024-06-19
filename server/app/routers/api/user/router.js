const express = require("express");

const router = express.Router();

const { add, read, browse } = require("../../../controllers/userActions");
const validateUser = require("../../../services/users")

router.get("/", browse)

router.post("/",validateUser, add );

router.get("/:id", read)

module.exports = router;
