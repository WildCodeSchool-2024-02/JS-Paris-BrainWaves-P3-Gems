import PropTypes from "prop-types";
import "./ModalConf.css";

function ModalConf({ setModalConfOpen, handleDelete }) {
    const handleCloseModal = () => {
      setModalConfOpen(false);
    };

  return (
      <div id="modal-conf-profil">
        <div className="container-conf-image">
      <h1>Êtes vous sûr?</h1>
     <div className="buttons-conf-modal">
      <button type='button' onClick={() => handleDelete()}>Oui</button>
      <button type='button' onClick={handleCloseModal}>Non</button>
    </div>
    </div>
    </div>
  );
}

ModalConf.propTypes = {
    setModalConfOpen: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };
  
  export default ModalConf;