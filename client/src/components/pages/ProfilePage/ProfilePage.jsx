import { FaHeart } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoBagSharp } from "react-icons/io5";
import "./ProfilePage.css";
import { useState } from "react";
import ModalFav from "../../Modal/ModalFav";

const user = {
  firstname: "Coline",
  lastname: "Grosso",
};

function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div id="ProfilePage">
      <div className="background-image">
        <h1>
          {user.firstname} {user.lastname}
        </h1>
        <div
          className="fav-profil"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="presentation"
        >
          <FaHeart className="heart-profil" />
          <p>Mes articles favoris</p>
        </div>
        {modalOpen && <ModalFav setModalOpen={setModalOpen} />}
        <div className="boxjewels-profil">
          <GiDiamondRing className="ring-profil" />
          <p>Ma boîte à bijoux</p>
        </div>
        <div className="fav-profil">
          <LiaFileInvoiceSolid className="invoice-profil" />
          <p>Mes ventes</p>
        </div>
        <div className="boxjewels-profil">
          <IoBagSharp className="bag-profil" />
          <p>Mes achats</p>
        </div>
        <div className="buttons-profil">
          <button className="sale-button" type="button">
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
