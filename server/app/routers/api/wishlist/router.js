const router = require('express').Router();

const {addWishlist, deleteSingleProductFromWishlist} = require('../../../controllers/wishlistAction')

router.post("/like" , addWishlist)

router.delete("/remove/product/:Id_product/user/:Id_user", deleteSingleProductFromWishlist);

module.exports= router;