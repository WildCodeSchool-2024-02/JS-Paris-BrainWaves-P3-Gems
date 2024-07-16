import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./LoginPage.css";
import { useAuth } from "../../../contexts/AuthContext";
import video from "../../../assets/images/videos/background2.mp4"

function LoginPage() {
  const mailRef = useRef();
  const passwordRef = useRef();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [shown, setShown] = useState(false);
  const [error, setError] = useState("");

  const handleCreateAccountClick = () => {
    navigate("/createAccount");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!mailRef.current.value || !passwordRef.current.value) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mail: mailRef.current.value,
            password: passwordRef.current.value,
          }),
          credentials: "include",
        }
      );

      if (response.status === 200) {
        const token = response.headers.get("Authorization");
        const user = await response.json();
        setAuth({ user, token });
        navigate("/");
      } else {
        setError(
          "Erreur lors de la connexion. Veuillez vérifier vos informations."
        );
        console.info(response);
      }
    } catch (err) {
      setError("Erreur serveur. Veuillez réessayer plus tard.");
      console.error(err);
    }
  };

  return (
    <div id="LoginPage">
      <form onSubmit={handleSubmit}>
        <div className="inputflex">
          <label className="inputLogin">
            Saisissez votre adresse e-mail
            <input
              className="inputLogin"
              type="email"
              ref={mailRef}
              placeholder="Adresse e-mail"
              aria-label="Adresse e-mail"
            />
          </label>
          <label className="inputLogin">
            Mot de passe
            <div className="password-input-container">
              <input
                className="inputLogin"
                type={shown ? "text" : "password"}
                ref={passwordRef}
                placeholder="Mot de passe"
                aria-label="Mot de passe"
              />
              {shown ? (
                <FiEye className="reveal" onClick={() => setShown(!shown)} />
              ) : (
                <FiEyeOff className="reveal" onClick={() => setShown(!shown)} />
              )}
            </div>
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div
          className="create-account"
          onClick={handleCreateAccountClick}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCreateAccountClick();
          }}
          role="button"
          tabIndex={0}
          aria-label="Créer un compte"
        >
          Créer un compte
        </div>
        <div className="nextButton">
          <button className="nextHome" type="submit">
            Suivant
          </button>
        </div>
      </form>
      <div className="inputflex">
        <p className="wishlist">
          <FaHeart className="heart" />
          Créez une wishlist personnalisée avec vos articles enregistrés
        </p>
      </div>
      <video autoPlay muted loop id="login-image-container">
          <source src={video} type="video/mp4" />
        </video>
    </div>
  );
}

export default LoginPage;