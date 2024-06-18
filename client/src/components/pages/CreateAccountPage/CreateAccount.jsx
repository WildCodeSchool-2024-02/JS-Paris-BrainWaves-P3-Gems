import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const firstname = useRef();
  const lastname = useRef();
  const mail = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    setErrors({});
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/API/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          mail: mail.current.value,
          password: password.current.value,
          confirmPassword: confirmPassword.current.value,
        }),
      });

      if (response.ok) {
        navigate("/profilePage");
      } else {
        const data = await response.json();
        setErrors(data.errors || {});
        console.error("Client error:", data.errors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="CreateAccount">
      <p>Inscription</p>
      <div className="inputflex">
        <label className="inputLogin">
          Saisissez votre adresse e-mail
          <input
            className="inputLogin"
            type="email"
            ref={mail}
            placeholder="Adresse e-mail"
          />
          {errors.mail && <span className="error">{errors.mail}</span>}
        </label>
        <label className="inputLogin">
          Prénom
          <input
            className="inputLogin"
            type="text"
            placeholder="Prénom"
            ref={firstname}
          />
          {errors.firstname && (
            <span className="error">{errors.firstname}</span>
          )}
        </label>
        <label className="inputLogin">
          Nom
          <input
            className="inputLogin"
            type="text"
            placeholder="Nom"
            ref={lastname}
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </label>
        <label className="inputLogin">
          Mot de passe
          <input
            className="inputLogin"
            type="password"
            placeholder="Mot de passe"
            ref={password}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label className="inputLogin">
          Confirmez le mot de passe
          <input
            className="inputLogin"
            type="password"
            placeholder="Confirmez le mot de passe"
            ref={confirmPassword}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </label>
      </div>
      <div className="btn-container">
        <button className="join-btn" onClick={handleSubmit} type="button">
          Rejoignez-nous
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
