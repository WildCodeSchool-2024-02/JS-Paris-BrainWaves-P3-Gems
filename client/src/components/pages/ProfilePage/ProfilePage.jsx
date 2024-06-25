import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoBagSharp } from "react-icons/io5";
import "./ProfilePage.css";
import { useEffect, useState } from "react";
import ModalFav from "../../Modal/ModalFav/ModalFav";
import ModalSells from "../../Modal/ModalSells/ModalSells";

function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSellsOpen, setModalSellsOpen] = useState(false);
  const [infoUser, setInfoUser] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClickSells = () => {
    setModalSellsOpen(true);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/`)
      .then((response) => response.json())
      .then((data) => setInfoUser(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div id="ProfilePage">
      <div className="background-image">
        <h1>
          {infoUser.firstname} {infoUser.lastname}
        </h1>
        <div
          className="fav-profile"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="presentation"
        >
          <FaHeart className="heart-profile" />
          <p>Mes articles favoris</p>
        </div>
        {modalOpen && <ModalFav setModalOpen={setModalOpen} />}
        <div
          onClick={handleClickSells}
          onKeyDown={handleClickSells}
          role="presentation"
          className="boxjewels-profile"
        >
          <GiDiamondRing className="ring-profile" />
          <p>Ma boîte à bijoux</p>
        </div>
        {modalSellsOpen && <ModalSells setModalSellsOpen={setModalSellsOpen} />}
        <div className="fav-profile">
          <LiaFileInvoiceSolid className="invoice-profile" />
          <p>Mes ventes</p>
        </div>
        <div className="boxjewels-profile">
          <IoBagSharp className="bag-profile" />
          <p>Mes achats</p>
        </div>
        <div className="buttons-profile">
          <button
            onClick={() => navigate(`/selling`)}
            className="sale-button"
            type="button"
          >
            Vendre un article
          </button>
          <button className="return-button" type="button">
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
