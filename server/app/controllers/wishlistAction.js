const tables = require("../../database/tables");

const addWishlist = async (req, res, next) => {
  try {
    const like = await tables.wishlist.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    next(error);
  }
};

const deleteSingleProductFromWishlist = async (req, res, next) => {
  try {
    const value = req.params
    const [like] = await tables.wishlist.delete(value);
    res.status(204).json(like);
  } catch (error) {
    next(error)
  }
};

const showWishlistCount = async (req, res, next)=> {
 try {
  const value = parseInt(req.params.id, 10);
  const count = await tables.wishlist.WishListCount(value);
  res.status(200).json(count);
 } catch (error) {
  next(error)
 }
}

module.exports = {
  addWishlist,
  deleteSingleProductFromWishlist,
  showWishlistCount,
};
