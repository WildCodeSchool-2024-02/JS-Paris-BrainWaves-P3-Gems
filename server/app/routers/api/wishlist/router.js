const router = require("express").Router();

const { add, read, remove } = require("../../../controllers/wishListActions");

router.post("/add-to-wishlist", add);

router.get("/:id", read);

router.delete("/remove", remove);

module.exports = router;
