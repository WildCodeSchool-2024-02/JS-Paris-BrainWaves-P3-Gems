import { GiHeartNecklace, GiHeartEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { BsWatch } from "react-icons/bs";
import { FaRing } from "react-icons/fa";
import PropTypes from 'prop-types';

import "./Nav.css";
import { useNavigate } from "react-router-dom";

function MenuList({ setclosebtn }) {
  const navigate = useNavigate();
  return (
    <div id="menu-list">
      <ul className="list">
        <li onClick={() => setclosebtn(false, navigate(`/itemsPage`))} onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >
          <GiHeartNecklace className="list-icon" /> Necklaces{" "}
        </li>
        <li onClick={() => setclosebtn(false, navigate(`/itemsPage`))}  onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >
          <LiaRingSolid className="list-icon" /> Rings{" "}
        </li>
        <li onClick={() => setclosebtn(false, navigate(`/itemsPage`))}  onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >
          <GiHeartEarrings className="list-icon" /> Ear rings{" "}
        </li>
        <li onClick={() => setclosebtn(false, navigate(`/itemsPage`))}  onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >
          <BsWatch className="list-icon" /> Watches{" "}
        </li>
        <li onClick={() => setclosebtn(false, navigate(`/itemsPage`))} onKeyDown={() => setclosebtn(false, navigate(`/itemsPage`))} role="presentation" >
          <FaRing className="list-icon" /> Bracelets{" "}
        </li>
      </ul>
    </div>
  );
}

MenuList.propTypes = {
  setclosebtn: PropTypes.func.isRequired
};

export default MenuList;
