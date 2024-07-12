import { useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./CreateAccount.css";
import ModalConfAccount from "../../Modal/ModalConfAccount/ModalConfAccount";

function CreateAccount() {
  const firstname = useRef();
  const lastname = useRef();
  const mail = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [modalConfOpen, setModalConfOpen] = useState(false);

  const [errors, setErrors] = useState({});
  const [strengthPassword, setStrengthPassword] = useState(0);
  const [shown, setShown] = useState(false);

  const checkStrengthPassword = (pass) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[a-z]/.test(pass)) strength += 1;
    if (/\d/.test(pass)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength += 1;

    return strength;
  };

  const handlePasswordChange = () => {
    const pass = password.current.value;
    setStrengthPassword(checkStrengthPassword(pass));
  };

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
        setModalConfOpen(true);
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
          <div className="password-strength-bar">
            <div
              className={`password-strength-level strength-${strengthPassword}`}
            />
          </div>
          <div className="password-input-container">
            <input
              className="inputLogin"
              type={shown ? "text" : "password"}
              placeholder="Mot de passe"
              ref={password}
              onChange={handlePasswordChange}
            />
            {shown ? (
              <FiEye className="reveal" onClick={() => setShown(!shown)} />
            ) : (
              <FiEyeOff className="reveal" onClick={() => setShown(!shown)} />
            )}
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label className="inputLogin">
          Confirmez le mot de passe
          <div className="password-input-container">
            <input
              className="inputLogin"
              type={shown ? "text" : "password"}
              placeholder="Confirmez le mot de passe"
              ref={confirmPassword}
            />
            {shown ? (
              <FiEye className="reveal" onClick={() => setShown(!shown)} />
            ) : (
              <FiEyeOff className="reveal" onClick={() => setShown(!shown)} />
            )}
          </div>
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
      {modalConfOpen && (
        <ModalConfAccount setModalConfOpen={setModalConfOpen} />
      )}
    </div>
  );
}

export default CreateAccount;
