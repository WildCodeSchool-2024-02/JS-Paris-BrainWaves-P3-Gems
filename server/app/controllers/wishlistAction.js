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

module.exports = {
  addWishlist,
  deleteSingleProductFromWishlist,
};
