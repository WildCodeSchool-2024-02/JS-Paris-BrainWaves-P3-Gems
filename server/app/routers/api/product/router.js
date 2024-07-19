const express = require("express");

const router = express.Router();

const {
  add,
  readProductByCategoryId,
  readProductByUser,
  deleteProductByUser,
  readSingleProduct,
  getFilter,
  getFromWishlist,
  ascendingProduct,
  descendingProduct,
  readProductToValidate,
  validate,
  sell,
  checkoutSession,
  retrieveSession,
} = require("../../../controllers/productActions");

const validateProduct = require("../../../services/product");
const { verifyToken } = require("../../../services/auth");
const fileUpload = require("../../../services/fileUpload");

router.post(
  "/",
  verifyToken,
  fileUpload.fields([
    { name: "picture_jewell", maxCount: 1 },
    { name: "picture_validation", maxCount: 1 },
  ]),
  validateProduct,
  add
);
router.post("/checkoutSession", checkoutSession);

router.delete("/", verifyToken, deleteProductByUser);

router.get("/user", verifyToken, readProductByUser);
router.get("/product-by-category/:id", readProductByCategoryId);
router.get("/single-Product/:id", readSingleProduct);
router.get("/searching_for_product", getFilter);
router.get("/product-to-validate", readProductToValidate);

router.get("/get-from-wishlist/", verifyToken,  getFromWishlist)


router.get("/ascending-prices/:id", ascendingProduct);
router.get("/descending-prices/:id", descendingProduct);

router.get("/stripe/:sessionId", retrieveSession)


router.put("/validate/:Id_product", validate);
router.put("/sell/:Id_product", verifyToken, sell)

module.exports = router;
