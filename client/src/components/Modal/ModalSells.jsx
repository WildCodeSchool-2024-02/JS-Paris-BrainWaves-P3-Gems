import PropTypes from "prop-types";
import "./ModalFav.css";
import { GiDiamondRing } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";

function ModalSells({ setModalSellsOpen }) {
  const data = useLoaderData();

  const handleCloseModal = () => {
    setModalSellsOpen(false);
  };

  const handleDelete = async (IdUser, IdProduct) => {
    try {
    await fetch(
        `${import.meta.env.VITE_API_URL}/api/product/user/1`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Id_user: IdUser,
            Id_product: IdProduct,
          }),
          }
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="modal-profil">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <GiDiamondRing className="heart-profil" />
          <p>Ma boite à bijoux</p>
        </div>
        {data.map((modal) => (
          <div className="modal-style" key={modal.Id_product}>
            <img src={modal.picture_jewell} alt="" className="image-modal" />
            <div className="modal-details">
              <h1>{modal.name}</h1>
              <h3>{modal.details}</h3>
              <div className="modal-bottom">
                <button
                  className="modal-delete"
                  type="button"
                  onClick={() => handleDelete(modal.Id_user, modal.Id_product)}
                >
                  Supprimer
                </button>
                <h2>{modal.price}€</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
ModalSells.propTypes = {
  setModalSellsOpen: PropTypes.func.isRequired,
};

export default ModalSells;
