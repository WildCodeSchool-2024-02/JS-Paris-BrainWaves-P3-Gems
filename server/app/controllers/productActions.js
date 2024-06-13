const tables = require("../../database/tables");

const add = async(req,res,next) => {
    try {
        const productData = req.body;
        const result = await tables.product.add(productData);
        res.status(201).json(result)
    } catch(err){
        next(err);
    }
};

module.exports = {
    add,
};