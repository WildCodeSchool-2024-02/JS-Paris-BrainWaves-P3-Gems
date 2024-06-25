import PropTypes from "prop-types";
import "./ModalConfForm.css";

function ModalConfForm({ setModalConfOpen }) {
  const handleCloseModal = () => {
    setModalConfOpen(false);
  };

  return (
    <div id="modal-conf-form-profile">
      <div className="container-conf-form-image">
        <p>Votre annonce a été soumise avec succès. </p>
        <p>Elle sera publiée après validation.</p>
          <button type="button" onClick={handleCloseModal}>
            Ok
          </button>
      </div>
    </div>
  );
}

ModalConfForm.propTypes = {
  setModalConfOpen: PropTypes.func.isRequired,
};

export default ModalConfForm;
