import "./CreateAccount.css";

// function CreateAccount() {
//   return (
//     <div id="CreateAccount">
//       <h1>Gems</h1>

//       <input
//         className="inputCreate"
//         type="email"
//         placeholder="Adresse e-mail"
//       />
//       <input className="inputCreate" type="email" placeholder="Prénom" />
//       <input className="inputCreate" type="email" placeholder="Nom" />
//       <input className="inputCreate" type="email" placeholder="Mot de passe" />
//       <button className="join-us" type="button">
//         Rejoignez nous
//       </button>
//     </div>
//   );
// }

// export default CreateAccount;

function CreateAccount() {
  return (
    <div id="CreateAccount">
      <h1>Gems</h1>
      <div className="inputflex">
        <label className="inputLogin">
          Saissisez votre addresse e-mail
          <input className="inputLogin" type="email" placeholder="Adresse e-mail" />
        </label>
      </div><div className="inputflex">
        <label className="inputLogin">
          Prénom
          <input className="inputLogin" type="text" placeholder="Prénom" />
        </label>
      </div><div className="inputflex">
        <label className="inputLogin">
          Nom
          <input className="inputLogin" type="email" placeholder="Nom" />
        </label>
      </div><div className="inputflex">
        <label className="inputLogin">
          Mot de passe
          <input className="inputLogin" type="passeword" placeholder="Mot de passe" />
        </label>
      </div>
      <div className="nextButton">
        <button className="nextHome" type="button">
        Rejoignez nous
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;