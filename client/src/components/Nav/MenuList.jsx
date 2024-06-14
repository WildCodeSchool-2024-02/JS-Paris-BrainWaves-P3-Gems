


import { GiHeartNecklace, GiHeartEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { BsWatch } from "react-icons/bs";
import { FaRing } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Nav.css";
import { useNavigate } from "react-router-dom";

function MenuList({ setclosebtn }) {
  const navigate = useNavigate();
 const port =import.meta.env.VITE_API_URL

  const handleMenuListBtn = (e) => {
    const value = e.target.getAttribute('value');
    fetch(`${port}/api/product/product-by-category/${value}`)
    .then((res)=> res.json())
    .then((data)=> navigate(`/itemsPage/` , {state: data }))
    .catch((err) => console.error(err))
    setclosebtn(false);
    ;
  };
  return (
    <div id="menu-list">
      <ul className="list">
        <li
          onClick={handleMenuListBtn}
          onKeyDown={handleMenuListBtn}
          role="presentation"
          value="3"
        >
          <GiHeartNecklace className="list-icon" /> Colliers{" "}
        </li>
        <li
          onClick={handleMenuListBtn}
          onKeyDown={handleMenuListBtn}
          role="presentation"
          value="2"
        >
          <LiaRingSolid className="list-icon" /> Bagues{" "}
        </li>
        <li
          onClick={handleMenuListBtn}
          onKeyDown={handleMenuListBtn}
          role="presentation"
          value="4"
        >
          <GiHeartEarrings className="list-icon" /> Boucles d'oreilles{" "}
        </li>
        <li
          onClick={handleMenuListBtn}
          onKeyDown={handleMenuListBtn}
          role="presentation"
          value="5"
        >
          <BsWatch className="list-icon" /> Montres{" "}
        </li>
        <li
          onClick={handleMenuListBtn}
          onKeyDown={handleMenuListBtn}
          role="presentation"
          value="1"
        >
          <FaRing className="list-icon" /> Bracelets{" "}
        </li>
      </ul>
    </div>
  );
}

MenuList.propTypes = {
  setclosebtn: PropTypes.func.isRequired,
};

export default MenuList;
