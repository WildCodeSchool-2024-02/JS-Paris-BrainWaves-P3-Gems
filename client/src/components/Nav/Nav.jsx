import "./Nav.css";
import { useState } from "react";
import { FaUser, FaHeart  } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import MenuList from "./MenuList";

function Nav() {
  const [closeBtn, setclosebtn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="Nav">
      <div className="nav-container">
        <h1 onClick={() => navigate(`/`)}  onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >Gems</h1>
        <div className="menu-icons">
          <FaUser onClick={() => navigate(`/profilePage`)} className="icons" />
          <RiSearchFill onClick={() => setShowInput(true)} className="icons" />
          <FaHeart onClick={() => navigate(`/profilePage`)} className="icons" />
          <IoBagSharp
            onClick={() => navigate(`/addToCart`)}
            className="icons"
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
