import { useNavigate } from "react-router-dom";
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";

function Card({ product, setShowInput, setCart }) {
  const port = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(false);

  const handleCard = () => {
    fetch(`${port}/api/product/single-Product/${product.Id_product}`)
      .then((res) => res.json())
      .then((data) =>
        navigate(`/ItemDetails/${product.Id_product}`, {
          state: { details: data },
        })
      )
      .catch((err) => console.error(err));

    setShowInput(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCard();
    }
  };

  const addToWishList = () => {
    navigate("/profile");
  };

  const handleCart = (article) => {
    if (disabledButton) return;
    setCart((prevCart) => {
      const newCart = [...prevCart, article];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setDisabledButton(true);
  };

  return (
    <div className="card">
      <img
        className="card-picture"
        src={product.picture_jewell}
        alt={product.name}
        onClick={handleCard}
        onKeyDown={handleKeyDown}
        role="presentation"
      />
      <FaRegHeart className="heart-logo" />
      <div className="logo-container">
        <div>
          <HiOutlineShoppingBag
            onKeyDown={() => handleCart(product)}
            className={`icon ${disabledButton ? "disabled" : ""}`}
            role="presentation"
            onClick={() => handleCart(product)}
          />
        </div>
        <div
          onClick={addToWishList}
          onKeyDown={addToWishList}
          role="presentation"
        >
          <FaRegHeart className="icon" />
        </div>
        <div>
          <SlOptionsVertical onClick={handleCard} className="icon" />
        </div>
      </div>
      <div className="card-title">
        <p className="title">{product.name}</p>
        <div className="price-and-logo">
          <HiOutlineShoppingBag
            className={`cart ${disabledButton ? "disabled" : ""}`}
            onKeyDown={() => handleCart(product)}
            role="presentation"
            onClick={() => handleCart(product)}
          />
          <p className="price">
            <MdOutlineEuroSymbol className="euro-logo" />
            <span>{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  setShowInput: PropTypes.func.isRequired,
  product: PropTypes.shape({
    Id_product: PropTypes.number.isRequired,
    picture_jewell: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Card;
