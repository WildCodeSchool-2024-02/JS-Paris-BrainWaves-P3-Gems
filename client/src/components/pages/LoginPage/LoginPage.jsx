import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FaHeart } from "react-icons/fa";
import flower from "../../../assets/images/illustrations/flower2.png";

function LoginPage() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/createAccount");
  };

  return (
    <div id="LoginPage">
      <h1>Gems</h1>

      <div className="inputflex">
        <label className="inputLogin">
          Saissisez votre addresse e-mail
          <input className="inputLogin" type="email" placeholder="Adresse e-mail" />
        </label>
      </div>
      <div className="inputflex" >
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
          suivant
        </button>
      </div>
      <div className="inputflex" >
        <p className="wishlist">
          <FaHeart />
          Créez une wishlit personnalisée avec vos articles enregistrés
        </p>
      </div>

      <div>
        <img className="flowerLogin" src={flower} alt="fleur" />
      </div>
    </div>
  );
}

export default LoginPage;
