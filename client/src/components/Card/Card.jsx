import { useNavigate } from "react-router-dom";
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useWishlist } from "../../contexts/WishlistContext";
import { useAuth } from "../../contexts/AuthContext";

function Card({ product, setShowInput, cart, setCart, setModalConfOpen }) {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(false);
  const { favorites, addToWishList, removeFromWishList } = useWishlist();
  const { auth } = useAuth();
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();

  useEffect(() => {
    if (cart && Array.isArray(cart)) {
      const isProductInCart = cart.some(
        (item) => item.Id_product === product.Id_product
      );
      setDisabledButton(isProductInCart);
    }
  }, [cart, product.Id_product]);

  function handleCard(data) {
    navigate(`/ItemDetails/${data.name}/${data.Id_product}`);
    setShowInput(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCard();
    }
  };

  const handleCart = (article) => {
    if (disabledButton) return;
    setCart((prevCart) => {
      const newCart = [...prevCart, article];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setDisabledButton(true);
    setModalConfOpen(true);
  };

  const isFavorite = favorites.some(
    (fav) =>
      fav.Id_product === product.Id_product &&
      fav.Id_user === auth?.user?.Id_user
  );

  return (
    <div className="card">
      <img
        className="card-picture"
        src={product.picture_jewell}
        alt={product.name}
        onClick={() => handleCard(product)}
        onKeyDown={handleKeyDown}
        role="presentation"
      />
      {isFavorite ? (
        <GoHeartFill
          onClick={() => removeFromWishList(product.Id_product)}
          role="presentation"
          className="heart-logo"
          style={{ color: "#790101" }}
        />
      ) : (
        <FaRegHeart
          onClick={auth ? () => addToWishList(product.Id_product) : () => navigate("/login")}
          role="presentation"
          className="heart-logo"
          style={{ color: "#790101" }}
        />
      )}

      <div className="logo-container">
        <div>
          <HiOutlineShoppingBag
            onKeyDown={() => handleCart(product)}
            className={`icon ${disabledButton ? "disabled" : ""}`}
            role="presentation"
            onClick={auth ? () => handleCart(product) : () => navigate("/login")}
          />
        </div>
        <div
          onClick={() => {
            if (isFavorite) {
              removeFromWishList(product.Id_product);
            } else {
              if (!auth)
              navigate("/login")
              addToWishList(product.Id_product);
            }
          }}
          role="presentation"
        >
          {isFavorite ? (
            <GoHeartFill className="icon" style={{ color: "white" }} />
          ) : (
            <GoHeart className="icon" style={{ color: "white" }} />
          )}
        </div>
        <div>
          <SlOptionsVertical
            className="icon"
            onClick={() => handleCard(product)}
          />
        </div>
      </div>
      <div className="card-title">
        <p className="title">{product.name}</p>
        <div className="price-and-logo">
          <HiOutlineShoppingBag
            className={`cart ${disabledButton ? "disabled" : ""}`}
            onKeyDown={() => handleCart(product)}
            role="presentation"
            onClick={auth ? () => handleCart(product) : () => navigate("/login")}
          />
          <p className="price">
            <MdOutlineEuroSymbol className="euro-logo" />
            <span>{formatPrice(product.price)}</span>
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
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      Id_product: PropTypes.number.isRequired,
      picture_jewell: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  setModalConfOpen: PropTypes.func.isRequired,
};

export default Card;
