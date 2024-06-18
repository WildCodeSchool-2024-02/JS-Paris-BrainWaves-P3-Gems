const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const createUser = req.body;
    const result = await tables.user.add(createUser);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
