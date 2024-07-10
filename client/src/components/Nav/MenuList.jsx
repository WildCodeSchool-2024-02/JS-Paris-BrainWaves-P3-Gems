import { GiHeartNecklace, GiHeartEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { BsWatch } from "react-icons/bs";
import { FaRing } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MenuList({ setclosebtn }) {
  const navigate = useNavigate();
  const ApiUrl = import.meta.env.VITE_API_URL;

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/api/category`)
      .then((res) => res.json())
      .then((data) => setMenuList(data))
      .catch((error) => console.error(error));
  }, [ApiUrl]);

  const handleMenuListBtn = (data) => {
    navigate(`/items/${data.title}/${data.Id_category_list}`);
    setclosebtn(false);
  };

  const showLogo = (title) => {
    
    switch (title) {
      case "Colliers":
        return <GiHeartNecklace />;
      case "Bracelets":
        return <FaRing />;

      case "Bagues":
        return <LiaRingSolid />;

      case "Boucles d'oreilles":
        return <GiHeartEarrings />;

      case "Montres":
        return <BsWatch />;
      
      default:
        return <GiHeartEarrings />;
    }
  };

  return (
    <div id="menu-list">
      <ul className="list">
        {menuList.map((catList) => (
          <li
            key={catList.Id_category_list}
            onClick={() => handleMenuListBtn(catList)}
            onKeyDown={() => handleMenuListBtn(catList)}
            role="presentation"
          >
            {showLogo(catList.title)} {catList.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

MenuList.propTypes = {
  setclosebtn: PropTypes.func.isRequired,
};

export default MenuList;
