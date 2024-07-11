const router = require('express').Router();

const { verifyToken } = require('../../../services/auth')

const {addWishlist, deleteSingleProductFromWishlist, showWishlistCount, readUserwishlist} = require('../../../controllers/wishlistAction')

router.use(verifyToken)

router.post("/like" , addWishlist)

router.delete("/remove/product/:Id_product/user/",  deleteSingleProductFromWishlist);

router.get('/show-counter/', showWishlistCount )

router.get('/get-wishlist/', readUserwishlist)

module.exports= router;