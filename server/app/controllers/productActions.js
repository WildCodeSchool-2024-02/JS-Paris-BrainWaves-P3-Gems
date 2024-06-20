const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const productData = req.body;
    const result = await tables.product.add(productData);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const readProductByCategoryId = async (req, res, next )=>{
  try {
    const parseId = Number(req.params.id, 10)
    const results = await tables.product.getProductByCategory(parseId);
    res.status(200).json(results)
  } catch (error) {
    next(error)
  } 
}
const readSingleProduct = async (req,res,next) =>{
  try {
    const parseId = Number(req.params.id);
    const [result] = await tables.product.getSingleProduct(parseId);
    res.status(200).json(result)
  } catch (error) {
    next(error)
    
  }
}

const getFilter = async(req, res, next)=>{

  try {
    const value = req.query.name
       const result = await tables.product.searchForProduct(value);
       res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
  

  const readProductByUser = async (req, res, next) =>{
   try {
    const parseId = parseInt(req.params.id,10)
    const [results] = await tables.product.readProductByUser(parseId)
    res.status(200).json(results)
   } catch (error) {
    next(error)
   }
  }

  const deleteProductByUser = async (req, res, next) => {
    try {
      const data = req.body
      const results = await tables.product.deleteProductByUser(data);
        res.json(results)
    } catch (error) {
      next(error)
    }
  }
  

module.exports = {
  add,
  readProductByCategoryId,
  readSingleProduct,
  getFilter,
  readProductByUser,
  deleteProductByUser
};
