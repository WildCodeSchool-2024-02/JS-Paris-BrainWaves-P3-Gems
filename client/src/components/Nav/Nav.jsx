import "./Nav.css";
import { useEffect, useState } from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";
import { useIsOnline } from "../../contexts/OnlineContext";
import ModalNav from "../Modal/ModalNav/ModalNav";

function Nav() {
  const [closeBtn, setclosebtn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const { isOnline } = useIsOnline(false);
  const [modalNav, setModalNav] = useState(false);
  const [infoUser, setInfoUser] = useState("");

  const handleClick = () => {
    setModalNav(true);
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/`)
      .then((response) => response.json())
      .then((data) => setInfoUser(data))
      .catch((error) => console.error("Error:", error));
  }, []);

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
          {infoUser.role === "admin" ? (
            <MdManageAccounts
              onClick={() => navigate(`/admin`)}
              className="icon-admin"
            />
          ) : null}
          {isOnline === false ? (
            <FaUser onClick={() => navigate(`/login`)} className="icons" />
          ) : (
            <FaUser onClick={() => navigate(`/profile`)} className="icons" />
          )}
          <RiSearchFill onClick={() => setShowInput(true)} className="icons" />
          <IoBagSharp
            onClick={() => navigate(`/addToCart`)}
            className="icons"
          />
          <FaHeart
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
            className="icons"
          />
          {modalNav && <ModalNav setModalNav={setModalNav} />}
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
