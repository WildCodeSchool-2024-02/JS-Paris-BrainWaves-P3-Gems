import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FaHeart } from "react-icons/fa";

function LoginPage() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/createAccount");
  };

  return (
    <div id="LoginPage">
      <div className="inputflex">
        <label className="inputLogin">
          Saissisez votre addresse e-mail
          <input
            className="inputLogin"
            type="email"
            placeholder="Adresse e-mail"
          />
        </label>
        <label className="inputLogin">
          Mot de passe
          <input type="password" placeholder="Mot de passe" />
        </label>
      </div>

      <div
        className="create-account"
        onClick={handleCreateAccountClick}
        onKeyUp={handleCreateAccountClick}
        role="button"
        tabIndex={0}
      >
        Créer un compte
      </div>
      <div className="nextButton">
        <button className="nextHome" type="button">
          Suivant
        </button>
      </div>
      <div className="inputflex">
        <p className="wishlist">
          <FaHeart className="heart"/>
          Créez une wishlit personnalisée avec vos articles enregistrés
        </p>
      </div>

      <div className="login-image-container"/>

    </div>
  );
}

export default LoginPage;
