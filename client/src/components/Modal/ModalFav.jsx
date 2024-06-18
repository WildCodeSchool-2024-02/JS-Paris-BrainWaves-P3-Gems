import PropTypes from "prop-types";
import "./ModalFav.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const favmodals = [
  {
    id: 1,
    img: "src/assets/images/categoryPhotos/necklace.png",
    name: "Collier argent",
    details: "Marque Tiffany & Co, sertie de 40 diamants",
    price: "€1300",
  },
  {
    id: 2,
    img: "src/assets/images/categoryPhotos/bracelet.jpg",
    name: "Collier argent",
    details: "Marque Tiffany & Co, sertie de 40 diamants",
    price: "€10300",
  },
  {
    id: 3,
    img: "src/assets/images/categoryPhotos/earrings.jpg",
    name: "Collier argent",
    details: "Marque Tiffany & Co, sertie de 40 diamants",
    price: "€3500",
  },
];

function ModalFav({ setModalOpen }) {
  const [modals, setModals]=useState(favmodals);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleRemoveItem = (id) => {
    setModals(modals.filter((modal)=>modal.id !==id))
  };

  return (
    <div id="modal-profil">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <FaHeart className="heart-profil" />
          <p>Mes articles favoris</p>
        </div>
        {modals.map((modal) => (
          <div className="modal-style" key={modal.id}>
            <img src={modal.img} alt="" className="image-modal" />
            <div className="modal-details">
            <h1>{modal.name}</h1>
              <h3>{modal.details}</h3>
              <div className="modal-bottom">
                <button
                  className="modal-delete"
                  type="button"
                  onClick={() => handleRemoveItem(modal.id)}
                >
                  Supprimer
                </button>
                <h2>{modal.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ModalFav.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default ModalFav;
