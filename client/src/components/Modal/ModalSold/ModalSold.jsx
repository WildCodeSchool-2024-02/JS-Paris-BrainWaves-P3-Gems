import PropTypes from "prop-types";
import "./ModalSold.css";
import { useEffect, useState } from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { useAuth } from "../../../contexts/AuthContext";


function ModalSold({ setModalSoldOpen }) {
  const [sellings, setSellings] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/product/user/sells`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSellings(data))
      .catch((error) => console.error("Error:", error));
  }, [auth.token]);

  const handleCloseModal = () => {
    setModalSoldOpen(false);
  };

  return (
    <div id="modal-sold">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <LiaFileInvoiceSolid className="ring-profile" />
          <p>Mes ventes</p>
        </div>
        {sellings.length === 0 && <h1 className="noFav">Vous n'avez pas de ventes</h1>}

        {sellings.map((modal) => (
          <div className="modal-style" key={modal.Id_product}>
            
            <img src={modal.picture_jewell} alt="" className="image-modal" />
            <div className="modal-details">
              <h1>{modal.name}</h1>
              <h3>{modal.details}</h3>
              <div className="modal-bottom">
                <h2>{modal.price}€</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
ModalSold.propTypes = {
  setModalSoldOpen: PropTypes.func.isRequired,
};

export default ModalSold;
