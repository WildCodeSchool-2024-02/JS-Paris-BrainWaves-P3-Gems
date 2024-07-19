import PropTypes from "prop-types";
import "./ModalConfAccount.css";
import { useNavigate } from "react-router-dom";

function ModalConfAccount({ setModalConfOpen }) {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setModalConfOpen(false);
    navigate("/login");
  };

  return (
    <div id="modal-conf-account-profile">
      <div className="container-conf-account-image">
        <p>Votre compte a été créé avec succès. </p>
        <button type="button" onClick={handleCloseModal}>
        Continuer
        </button>
      </div>
    </div>
  );
}

ModalConfAccount.propTypes = {
  setModalConfOpen: PropTypes.func.isRequired,
};

export default ModalConfAccount;
