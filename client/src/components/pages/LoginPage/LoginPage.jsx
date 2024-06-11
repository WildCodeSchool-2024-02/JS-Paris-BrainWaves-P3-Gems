import "./LoginPage.css";
import { FaHeart } from "react-icons/fa";
import flower from "../../../assets/images/illustrations/flower2.png";

function LoginPage() {
  return (
    <div id="LoginPage">
      <div className="Pagelogin">
        <h1>Gems</h1>

        <label className="input">
          Saissisez votre addresse e-mail
          <input type="email" defaultValue="Adresse e-mail" />
        </label>

        <label className="input">
          Mot de passe
          <input type="password" defaultValue="Mot de passe" />
        </label>

        <button type="button">suivant</button>
        <p>Crée un compte</p>
        <p>
          <FaHeart />
          Crée une wishlit personnalisée avec vos articles enregistrés
        </p>
      </div>
      <div>
        <img className="flowerLogin" src={flower} alt="fleur" />
      </div>
    </div>
  );
}

export default LoginPage;
