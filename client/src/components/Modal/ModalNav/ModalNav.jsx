import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "./ModalNav.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useWishlist } from "../../../contexts/WishlistContext";

function ModalNav({ setModalNav }) {
  const [modalNavigation, setModalNavigation] = useState([]);
  const [likeCount, setLikeCount] = useState(null);

  const {auth}=useAuth()

  const urlApi = import.meta.env.VITE_API_URL;

  const {removeFromWishList} = useWishlist()

  const handleCloseModal = () => {
    setModalNav(false);
  };

  useEffect(() => {

    fetch(`${urlApi}/api/wishlist/show-counter/`,{
      headers:{"Content-Type": "application/json", Authorization: ` Bearer ${auth?.token}`}
    })
      .then((res) => res.json())
      .then((data) => setLikeCount(data.count))
      .catch((error) => console.error(error));
  }, [urlApi, auth]);
  

  useEffect(() => {
    fetch(`${urlApi}/api/product/get-from-wishlist/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setModalNavigation(data))
      .catch((error) => console.error(error));
  }, [urlApi, auth]);

  const handleRemoveItem = async (productid) => {
    removeFromWishList(productid)
      if (removeFromWishList(productid)) {
        setModalNavigation( modalNavigation.filter( (modalsNav) => modalsNav.Id_product !== productid ) )
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
          <p>Mes articles favoris {likeCount > 0 ? `(${likeCount})`: ""}  </p>    
        </div>
        {modalNavigation.length === 0 && <h1 className="noFav">Vous n'avez pas d'articles favoris</h1>}
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
};
export default ModalNav;
