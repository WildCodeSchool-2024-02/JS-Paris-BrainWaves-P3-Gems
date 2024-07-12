const tables = require("../../database/tables");

const readTransaction = async (req, res, next) => {
    try {
        const transaction = await tables.transaction.readTransaction();
        res.json(transaction);
    } catch (error) {
        next(error);
    }
};

const addTransaction = async (req, res, next) => {
  try {
    const transactionData = req.body
      const result = await tables.transaction.addTransaction(transactionData);
      res.status(201).json(result);
    } catch (error) {
      next(error);
  }
};

module.exports = {
    readTransaction,
    addTransaction
};
