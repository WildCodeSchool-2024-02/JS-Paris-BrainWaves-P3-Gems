import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import "./ModalNav.css";

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

function ModalNav({ setModalNav }) {
  const [modalNavigation, setModalNavigation] = useState(favmodals);
  const handleCloseModal = () => {
    setModalNav(false);
  };
  const handleRemoveItem = (id) => {
    setModalNavigation(
      modalNavigation.filter((modalsNav) => modalsNav.id !== id)
    );
  };
  return (
    <div id="modal-nav">
      <button type="button" onClick={handleCloseModal} className="btn-closeNav">
        X
      </button>
      <div className="container-imgNav">
        <div className="container-heartNav">
          <FaHeart className="heart-profileNav" />
          <p>Mes articles favoris</p>
        </div>
        {modalNavigation.map((modalsNav) => (
          <div className="modal-styleNav" key={modalsNav.id}>
            <img src={modalsNav.img} alt="" className="image-modalNav" />
            <div className="modal-detailsNav">
              <h1>{modalsNav.name}</h1>
              <h3>{modalsNav.details}</h3>
              <div className="modal-bottomNav">
                <button
                  className="modal-deleteNav"
                  type="button"
                  onClick={() => handleRemoveItem(modalsNav.id)}
                >
                  Supprimer
                </button>
                <h2>{modalsNav.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ModalNav.propTypes = {
  setModalNav: PropTypes.func.isRequired,
};
export default ModalNav;
