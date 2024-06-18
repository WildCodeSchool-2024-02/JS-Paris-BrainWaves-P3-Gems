import PropTypes from "prop-types";
import "../ModalFav/ModalFav.css";
import { GiDiamondRing } from "react-icons/gi";

function ModalSells({ setModalSellsOpen }) {
  const handleCloseModal = () => {
    setModalSellsOpen(false);
  };

  return (
    <div id="modal-profil">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <GiDiamondRing className="ring-profil" />
          <p>Ma boite à bijoux</p>
        </div>
        <button className="modal-delete" type="button">
          Supprimer
        </button>
        <h2>prix</h2>
      </div>
    </div>
  );
}
ModalSells.propTypes = {
  setModalSellsOpen: PropTypes.func.isRequired,
};

export default ModalSells;
