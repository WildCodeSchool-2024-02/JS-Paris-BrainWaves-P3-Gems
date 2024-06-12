import PropTypes from "prop-types";
import picture1 from "../../assets/images/categoryPhotos/bracelet.jpg";
import picture2 from "../../assets/images/categoryPhotos/earrings.jpg";
import "./ModalFav.css";

function ModalFav({ setModalOpen }) {
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modal-profil">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <img src={picture1} alt="" className="image-modal" />
        <img src={picture2} alt="" className="image-modal" />
      </div>
    </div>
  );
}

ModalFav.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default ModalFav;
