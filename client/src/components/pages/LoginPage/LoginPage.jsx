import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  const mailRef = useRef();
  const passwordRef = useRef();

  const { setAuth } = useOutletContext();

  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/createAccount");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mail: mailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();

        setAuth(auth);

        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="LoginPage">
      <div className="inputflex">
        <label className="inputLogin">
          Saissisez votre addresse e-mail
          <input
            className="inputLogin"
            type="email"
            ref={mailRef}
            placeholder="Adresse e-mail"
          />
        </label>
        <label className="inputLogin">
          Mot de passe
          <input type="password" ref={passwordRef} placeholder="Mot de passe" />
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
        <button
          className="nextHome"
          onClick={handleSubmit}
          onKeyUp={handleSubmit}
          type="button"
        >
          Suivant
        </button>
      </div>
      <div className="inputflex">
        <p className="wishlist">
          <FaHeart className="heart" />
          Créez une wishlit personnalisée avec vos articles enregistrés
        </p>
      </div>

      <div className="login-image-container" />
    </div>
  );
}

export default LoginPage;
