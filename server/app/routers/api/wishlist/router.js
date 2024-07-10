const router = require('express').Router();

const {addWishlist, deleteSingleProductFromWishlist, showWishlistCount} = require('../../../controllers/wishlistAction')

router.post("/like" , addWishlist)

router.delete("/remove/product/:Id_product/user/:Id_user", deleteSingleProductFromWishlist);

router.get('/show-counter/:id_user', showWishlistCount )

module.exports= router;