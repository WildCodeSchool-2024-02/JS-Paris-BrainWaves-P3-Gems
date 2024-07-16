import PropTypes from "prop-types";
import "../ModalFav/ModalFav.css";
import { GiDiamondRing } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import ModalConf from "../ModalConf/ModalConf";

function ModalSells({ setModalSellsOpen }) {
  const [sellings, setSellings] = useState([]);
  const [modalConfOpen, setModalConfOpen] = useState(false);
  const [modalToDelete, setModalToDelete] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/product/user/`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSellings(data))
      .catch((error) => console.error("Error:", error));
  }, [auth.token]);

  const handleClickConf = (modal) => {
    setModalConfOpen(true);
    setModalToDelete(modal);
  };

  const handleCloseModal = () => {
    setModalSellsOpen(false);
  };

  const handleDelete = async (IdUser, IdProduct) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/product/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          Id_user: IdUser,
          Id_product: IdProduct,
        }),
      });

      const filteredData = sellings.filter(
        (modal) => modal.Id_product !== IdProduct
      );
      setModalConfOpen(false);
      setSellings(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="modal-profile">
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-image">
        <div className="container-heart">
          <GiDiamondRing className="ring-profile" />
          <p>Ma boite à bijoux</p>
        </div>
        {sellings.length === 0 && <h1 className="noFav">Vous n'avez pas d'annonces postées</h1>}

        {sellings.map((modal) => (
          <div className="modal-style" key={modal.Id_product}>
            
            <img src={modal.picture_jewell} alt="" className="image-modal" />
            <div className="modal-details">
              <h1>{modal.name}</h1>
              <h3>{modal.details}</h3>
              <div className="modal-bottom">
                <button
                  className="modal-delete"
                  type="button"
                  onClick={() => handleClickConf(modal)}
                >
                  Supprimer
                </button>
                <h2>{modal.price}€</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalConfOpen && (
        <ModalConf
          setModalConfOpen={setModalConfOpen}
          handleDelete={() =>
            handleDelete(modalToDelete.Id_user, modalToDelete.Id_product)
          }
        />
      )}
    </div>
  );
}
ModalSells.propTypes = {
  setModalSellsOpen: PropTypes.func.isRequired,
};

export default ModalSells;
