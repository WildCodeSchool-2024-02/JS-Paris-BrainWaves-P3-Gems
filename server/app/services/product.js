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

  if (name.length > 25) {
    errors.name = "Maximum 25 caractères autorisés";
  }

  if (details.length > 30) {
    errors.details = "Maximum 30 caractères autorisés";
  }

  if (price.length > 6) {
    errors.price = "Maximum de 6 caractères autorisés";
  }

  if (price < 0) {
    errors.price = "Entrez une valeur positive";
  }

  // if (req.body.picture_jewell.length === 0 ||req.body.picture_validation.length === 0) {
  //   errors.picture = "Veuillez ajouter une photo" ;
  // }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  return next();
};

module.exports = validateProduct;
