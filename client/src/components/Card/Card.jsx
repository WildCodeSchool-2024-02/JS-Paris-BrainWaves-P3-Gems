import { useNavigate } from "react-router-dom";
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";


function Card({ product, setShowInput, cart, setCart }) {

  const urlApi = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(false);
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();


  useEffect(() => {
    const isProductInCart = cart.some(
      (item) => item.Id_product === product.Id_product
    );
    setDisabledButton(isProductInCart);
  }, [cart, product.Id_product]);


 

  function handleCard(data) {
    navigate(`/ItemDetails/${data.name}/${data.Id_product}`);
    setShowInput(false) ;  
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCard();
    }
  };

  async function addToWishList(prod, user) {
    try {
      const response = await fetch(`${urlApi}/api/wishlist/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id_product: prod, Id_user: user }),
      });

      if (response.status === 200) {
        toast.success("Ajouté aux favoris", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
          theme: "dark",
          closeOnClick: true,
        });

        return response.json();
      }

      toast.info("Déjà dans vos favoris", {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
        theme: "light",
        closeOnClick: true,
      });
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async function removeFromWishList(prod, user) {
    try {
      const response = await fetch(`${urlApi}/api/wishlist/unlike`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id_product: prod, Id_user: user }),
      });

      if (response.status === 200) {
        toast.success("Retiré des favoris", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
          theme: "light",
          closeOnClick: true,
        });
        return response.json();
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

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
        onClick={() => handleCard(product)}
        onKeyDown={handleKeyDown}
        role="presentation"
      />
      <GoHeart
        onClick={() => addToWishList(product.Id_product, 2)}
        onDoubleClick={() => removeFromWishList(product.Id_product, 2)}
        role="presentation"
        className="heart-logo"

        style={{ color: "gray" }}
      />

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

          onClick={" "}
          role="presentation"
        >
          <GoHeart
            className="icon"
            style={{ color:"gray"}}
          />
        </div>
        <div>
          <SlOptionsVertical className="icon" onClick={() => handleCard()} />
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
};

export default Card;
