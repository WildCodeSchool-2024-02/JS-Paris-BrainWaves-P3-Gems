import PropTypes from "prop-types";
import "./ModalCart.css";

function ModalCart({ setModalConfOpen }) {
  const handleCloseModal = () => {
    setModalConfOpen(false);
  };

  return (
    <div id="modal-conf-cart-profile">
      <div className="container-conf-cart-image">
        <p>Cet article a été ajouté au panier </p>
        <button type="button" onClick={handleCloseModal}>
        Ok
        </button>
      </div>
    </div>
  );
}

ModalCart.propTypes = {
  setModalConfOpen: PropTypes.func.isRequired,
};

export default ModalCart;
