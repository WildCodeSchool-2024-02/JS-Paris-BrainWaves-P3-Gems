const tables = require ("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const createUser = req.body;
    const result = await tables.user.add(createUser);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const users = await tables.user.read(req.params.id);
    if (users == null) {
      res.sendStatus(404);
    } else {
      res.json(users);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  add,
  read,
};
