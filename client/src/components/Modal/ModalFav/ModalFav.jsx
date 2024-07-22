import PropTypes from "prop-types";
import "./ModalFav.css";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import {useAuth} from '../../../contexts/AuthContext'
import { useWishlist } from "../../../contexts/WishlistContext";
import { useToast } from "../../../contexts/ToastContext";


function ModalFav({ setModalOpen , setFavorite }) {
  const [modals, setModals] = useState([]);
  const {auth} = useAuth()
  const {addToast} = useToast()
  const urlApi = import.meta.env.VITE_API_URL;

  const {removeFromWishList  } = useWishlist()

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRemoveItem = async(productid) => {
    removeFromWishList(productid)
      if ( removeFromWishList(productid) ) {
        setModals(modals.filter((modal) => modal.Id_product !== productid));
        setFavorite(false)
       
      } 
  }

  



  useEffect(() => {
    fetch(`${urlApi}/api/product/get-from-wishlist/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setModals(data))
      .catch((error) => console.error(error));
  }, [urlApi, auth]);

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
        {modals.length === 0 && <h1 className="noFav">Vous n'avez pas d'articles favoris</h1>}
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
                  onClick={() => {handleRemoveItem(modal.Id_product); addToast("success", "Bien retiré des favoris", 4000);}}
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

ModalFav.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  setFavorite:PropTypes.func.isRequired,
};

export default ModalFav;
