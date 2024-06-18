const validateUser = (req, res, next) => {
  const { firstname, lastname, mail, password, confirmPassword } = req.body;
  const errors = {};

  if (!firstname) {
    errors.firstname = "Le champ 'Prénom' est obligatoire.";
  }

  if (!lastname) {
    errors.lastname = "Le champ 'Nom' est obligatoire.";
  }

  if (!mail) {
    errors.mail = "Le champ 'Adresse e-mail' est obligatoire.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    errors.mail = "Le format de l'adresse e-mail n'est pas valide.";
  }

  if (!password) {
    errors.password = "Le champ 'Mot de passe' est obligatoire.";
  } else {
    if (password.length < 8) {
      errors.password =
        "Le 'Mot de passe' doit contenir au moins 8 caractères.";
    }
    if (!/[A-Z]/.test(password)) {
      errors.password =
        "Le 'Mot de passe' doit contenir au moins une lettre majuscule.";
    }
    if (!/[a-z]/.test(password)) {
      errors.password =
        "Le 'Mot de passe' doit contenir au moins une lettre minuscule.";
    }
    if (!/[0-9]/.test(password)) {
      errors.password = "Le 'Mot de passe' doit contenir au moins un chiffre.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password =
        "Le 'Mot de passe' doit contenir au moins un caractère spécial.";
    }
  }

  if (password !== confirmPassword) {
    errors.confirmPassword =
      "La 'Confirmation du mot de passe' doit correspondre au 'Mot de passe'.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  return next();
};

module.exports = validateUser;
