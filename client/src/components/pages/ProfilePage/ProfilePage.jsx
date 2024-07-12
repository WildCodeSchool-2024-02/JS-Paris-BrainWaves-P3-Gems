import { useNavigate, useOutletContext } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoBagSharp } from "react-icons/io5";
import "./ProfilePage.css";
import { useState, useEffect } from "react";
import ModalFav from "../../Modal/ModalFav/ModalFav";
import ModalSells from "../../Modal/ModalSells/ModalSells";
import { useAuth } from "../../../contexts/AuthContext";
import video from "../../../assets/images/videos/background1.mp4"

function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSellsOpen, setModalSellsOpen] = useState(false);
  const { setFavorite } = useOutletContext();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClickSells = () => {
    setModalSellsOpen(true);
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error));
    }
  }, [auth, navigate]);

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const firstName = capitalizeFirstLetter(auth?.user?.firstname);
  const lastName = capitalizeFirstLetter(auth?.user?.lastname);

  const logout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/user/logout`, {
      credentials: "include",
    });
    setAuth({ auth: false, user: null, token: null });
    navigate("/login");
  };

  return (
    <div id="ProfilePage">
      <div className="background">
        <video autoPlay muted loop id="backgroundVideo">
          <source src={video} type="video/mp4" />
        </video>
        <h1>
          {firstName} {lastName}
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
        {modalOpen && (
          <ModalFav setModalOpen={setModalOpen} setFavorite={setFavorite} />
        )}
        <div
          onClick={handleClickSells}
          onKeyDown={handleClickSells}
          role="presentation"
          className="boxjewels-profile"
        >
          <GiDiamondRing className="ring-profile" />
          <p>Ma boîte à bijoux</p>
        </div>
        {modalSellsOpen && (
          <ModalSells
            setModalSellsOpen={setModalSellsOpen}
            setFavorite={setFavorite}
          />
        )}
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
          <button className="return-button" type="button" onClick={logout}>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
