const tables = require("../../database/tables");

const addWishlist = async (req, res, next) => {
  try {
    const like = await tables.wishlist.create(req.body, req.auth.id);
    res.status(201).json(like);
  } catch (error) {
    next(error);
  }
};

const deleteSingleProductFromWishlist = async (req, res, next) => {
  try {
    const value = req.auth.id

    await tables.wishlist.delete(req.params.Id_product, value);
    res.sendStatus(204);
  } catch (error) {
    next(error)
  }
};

const showWishlistCount = async (req, res, next)=> {
 try {
  const userId = req.auth.id
  const [[count]] = await tables.wishlist.WishListCount(userId);
  res.status(200).json(count);
 } catch (error) {
  next(error)
 }
}

 const readUserwishlist = async (req, res, next) => {

  try {
    const userId = req.auth.id
    const [result] = await tables.wishlist.getWishlist(userId);
    res.status(200).json(result);
  } catch (error) {
    next(error)
 }
}

module.exports = {
  addWishlist,
  deleteSingleProductFromWishlist,
  showWishlistCount,
  readUserwishlist,
}
