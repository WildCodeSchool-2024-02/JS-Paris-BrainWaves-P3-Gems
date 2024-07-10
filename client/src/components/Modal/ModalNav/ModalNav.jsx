import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "./ModalNav.css";

function ModalNav({ setModalNav, setFavorite }) {
  const [modalNavigation, setModalNavigation] = useState([]);

  const urlApi = import.meta.env.VITE_API_URL;

  const handleCloseModal = () => {
    setModalNav(false);
  };

  useEffect(() => {
    fetch(`${urlApi}/api/product//get-from-wishlist/${2}`)
      .then((res) => res.json())
      .then((data) => setModalNavigation(data))
      .catch((error) => console.error(error));
  }, [urlApi]);

  const handleRemoveItem = async (productid) => {
    try {
      const response = await fetch(
        `${urlApi}/api/wishlist/remove/product/${productid}/user/${2}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setModalNavigation(
          modalNavigation.filter(
            (modalsNav) => modalsNav.Id_product !== productid
          )
        );
        setFavorite(false);
        return response.json();
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
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
          <div className="modal-styleNav" key={modalsNav.Id_product}>
            <img
              src={modalsNav.picture_jewell}
              alt=""
              className="image-modalNav"
            />
            <div className="modal-detailsNav">
              <h1>{modalsNav.name}</h1>
              <h3>{modalsNav.details}</h3>
              <div className="modal-bottomNav">
                <button
                  className="modal-deleteNav"
                  type="button"
                  onClick={() => handleRemoveItem(modalsNav.Id_product)}
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
  setFavorite: PropTypes.func.isRequired,
};
export default ModalNav;
