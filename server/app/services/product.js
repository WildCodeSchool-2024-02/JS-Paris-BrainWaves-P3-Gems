const validateProduct = (req, res, next) => {
  const { name, details, price } = req.body;

  const errors = {};

  if (
    name.length === 0 ||
    details.length === 0 ||
    price.length === 0 ||
    req.body.Id_category.length === 0
  ) {
    errors.all = "Veuillez remplir tous les champs";
  }
  
  if (!req?.files?.picture_jewell) {
    errors.picture = "Veuillez ajouter une photo";
  }

  if (!req?.files?.picture_validation) {
    errors.invoice = "Veuillez ajouter une facture";
  }

  if (name.length > 50) {
    errors.name = "Maximum 50 caractères autorisés";
  }

  if (details.length > 80) {
    errors.details = "Maximum 80 caractères autorisés";
  }

  if (price.length > 6) {
    errors.price = "Maximum de 6 caractères autorisés";
  }

  if (price < 0) {
    errors.price = "Entrez une valeur positive";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  return next();
};

module.exports = validateProduct;
