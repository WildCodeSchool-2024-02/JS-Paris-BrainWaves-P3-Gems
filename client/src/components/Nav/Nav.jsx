import "./Nav.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";
import { useAuth } from "../../contexts/AuthContext";
import ModalNav from "../Modal/ModalNav/ModalNav";
import { useCart } from "../../contexts/CartContext";

function Nav({ favorite, setFavorite }) {
  const [closeBtn, setclosebtn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const { auth } = useAuth();
  const [modalNav, setModalNav] = useState(false);

  const { cart } = useCart();
  const handleClick = () => {
    setModalNav(true);
  };

  const navigate = useNavigate();

  return (
    <div id="Nav">
      <div className="nav-container">
        <h1
          onClick={() => navigate(`/`)}
          onKeyDown={() => setclosebtn(false, navigate(`/items`))}
          role="presentation"
        >
          Gems
        </h1>
        <div className="menu-icons">
          {auth?.user?.is_admin ? (
            <MdManageAccounts
              onClick={() => navigate(`/admin`)}
              className="icon-admin"
            />
          ) : null}
          {auth ? (
            <FaUser onClick={() => navigate(`/profile`)} className="icons" />
          ) : (
            <FaUser onClick={() => navigate(`/login`)} className="icons" />
          )}
          <RiSearchFill onClick={() => setShowInput(true)} className="icons" />
          <IoBagSharp
            onClick={() => navigate(`/addToCart`)}
            className="icons"
          />
          <article
            className="notification-cart"
            onClick={() => navigate(`/addToCart`)}
            onKeyDown={() => navigate(`/addToCart`)}
            role="presentation"
          >
            {auth && cart.length !== 0 ? <p>{cart.length}</p> : null}
            </article>
          <div className="like-continer">
            <FaHeart
              onClick={ auth ? handleClick : ()=> navigate("/login") }
              onKeyDown={handleClick}
              role="presentation"
              className="icons"
            />{" "}
          </div>
          {modalNav && (
            <ModalNav
              setFavorite={setFavorite}
              favorite={favorite}
              setModalNav={setModalNav}
            />
          )}
          <div
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
            className="boxjewels-profileNav"
          />
          {closeBtn ? (
            <RxCross2
              className="close-icons"
              onClick={() => setclosebtn(false)}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setclosebtn(true)}
              className="icons"
            />
          )}
        </div>
      </div>
      {showInput ? <SearchInput setShowInput={setShowInput} /> : ""}
      {closeBtn ? <MenuList setclosebtn={setclosebtn} /> : ""}
    </div>
  );
}

export default Nav;

Nav.propTypes = {
  setFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};