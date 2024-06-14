import "./CreateAccount.css";

function CreateAccount() {
  return (
    <div id="CreateAccount">
      <h1>Gems</h1>
      <p>inscription</p>
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
          Prénom
          <input className="inputLogin" type="text" placeholder="Prénom" />
        </label>

        <label className="inputLogin">
          Nom
          <input className="inputLogin" type="text" placeholder="Nom" />
        </label>

        <label className="inputLogin">
          Mot de passe
          <input
            className="inputLogin"
            type="passeword"
            placeholder="Mot de passe"
          />
        </label>
      </div>
      <div className="btn-container">
        <button className="join-btn" type="button">
          Rejoignez nous
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
