import PropTypes from "prop-types";
import "./ModalFav.css";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

function ModalFav({ setModalOpen , setFavorite }) {
  const [modals, setModals] = useState([]);

  const urlApi = import.meta.env.VITE_API_URL;

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRemoveItem = async(productid) => {
    try {
      const response = await fetch(
        `${urlApi}/api/wishlist/remove/product/${productid}/user/${2}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setModals(modals.filter((modal) => modal.Id_product !== productid));
        setFavorite(false)
        return response.json();
      } 
        
  
    } catch (error) {
      console.error(error);
    }
    return true
  }



  useEffect(() => {
    fetch(`${urlApi}/api/product//get-from-wishlist/${2}`)
      .then((res) => res.json())
      .then((data) => setModals(data))
      .catch((error) => console.error(error));
  }, [urlApi]);

  return (
    <div id="modal-profile">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <FaHeart className="heart-profile" />
          <p>Mes articles favoris </p>
        </div>
        {modals.map((modal) => (
          <div className="modal-style" key={modal.Id_product}>
            <img src={modal.picture_jewell} alt="" className="image-modal" />
            <div className="modal-details">
              <h1>{modal.name}</h1>
              <h3>{modal.details}</h3>
              <div className="modal-bottom">
                <button
                  className="modal-delete"
                  type="button"
                  onClick={() => handleRemoveItem(modal.Id_product)}
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
  setFavorite:PropTypes.func.isRequired,
};

export default ModalFav;
