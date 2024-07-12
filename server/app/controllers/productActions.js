const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const uploadDest = `${process.env.APP_HOST}/upload/`;
    if (req.files.picture_jewell)
      req.body.picture_jewell =
        uploadDest + req.files.picture_jewell[0].filename;
    if (req.files.picture_validation)
      req.body.picture_validation =
        uploadDest + req.files.picture_validation[0].filename;

    const productData = req.body;
    productData.Id_user = req.auth.id;

    const result = await tables.product.add(productData);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const products = await tables.product.readAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const readProductByCategoryId = async (req, res, next) => {
  try {
    const parseId = parseInt(req.params.id, 10);
    const results = await tables.product.getProductByCategory(parseId);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};
const readSingleProduct = async (req, res, next) => {
  try {
    const parseId = Number(req.params.id);
    const [result] = await tables.product.getSingleProduct(parseId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getFilter = async (req, res, next) => {
  try {
    const value = req.query.name;
    const result = await tables.product.searchForProduct(value);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const readProductByUser = async (req, res, next) => {
  try {
    const parseId = parseInt(req.params.id, 10);
    const [results] = await tables.product.readProductByUser(parseId);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

const deleteProductByUser = async (req, res, next) => {
  try {
    const data = req.body;
    const results = await tables.product.deleteProductByUser(data);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const readProductToValidate = async (req, res, next) => {
  try {
    const [results] = await tables.product.readProductToValidate();
    res.json(results);
  } catch (error) {
    next(error);
  }
};
const validate = async (req, res, next) => {
  try {
    const product = await tables.product.validateProduct(req.params.Id_product);
    res.status(204).json(product);
  } catch (error) {
    next(error);
  }
};

  const getFromWishlist = async(req,res,next) =>{
    try {
      const value = req.auth.id
      const result = await tables.product.getProductFromWishlist(value);
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

const ascendingProduct = async (req,res,next )=> {
 try {
  const value = parseInt(req.params.id, 10)

  const show = await tables.product.getProductByAsc(value);
  res.status(200).json(show)
  
 } catch (error) {
  next(error)
 }
}

const descendingProduct = async (req,res,next)=> {
  try {
    const value = parseInt(req.params.id, 10);
    const result = await tables.product.getProductFromWishlist(value);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const checkoutSession = async (req, res, next) => {
  try {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
          images: [product.picture_jewell],
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/addToCart`,
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  browse,
  readProductByCategoryId,
  readSingleProduct,
  getFilter,
  readProductByUser,
  deleteProductByUser,
  getFromWishlist,
  ascendingProduct,
  descendingProduct,
  readProductToValidate,
  validate,
  checkoutSession,
};
