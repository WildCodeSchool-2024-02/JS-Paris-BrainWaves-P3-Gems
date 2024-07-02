import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

import "./ItemDetailsPage.css";
import { useCart } from "../../../contexts/CartContext";

function ItemDetailsPage() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const { details: detailProduct } = location.state || {};
  const { cart, setCart } = useCart();
  const [disabledButton, setDisabledButton] = useState(false);
  const sellerEmail = detailProduct ? `mailto:${detailProduct.mail}` : "";

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setCart(JSON.parse(initialLocalCart));
    }
  }, [setCart]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleCart = (article) => {
    if (disabledButton) return;
    setCart((prevCart) => {
      const newCart = [...prevCart, article];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setDisabledButton(true);
  };

  if (!detailProduct) {
    return (
      <div>
        <h2>Product details not found</h2>
      </div>
    );
  }

  return (
    <div id="ItemDetailsPage">
      <div className="container">
        <div className="container-img">
          <img
            src={detailProduct.picture_validation}
            alt={detailProduct.name}
            className="image-detail"
          />
        </div>
        <FaHeart className="heart-img" />
      </div>
      <div className="container-text">
        <h2>{detailProduct.name}</h2>
        <p className="price">
          <MdOutlineEuroSymbol className="euro-logo" /> {detailProduct.price}
        </p>
        <p>{detailProduct.details}</p>
        <div className="container-button">
          <button
            type="button"
            className="button-detail"
            onClick={() => handleCart(detailProduct)}
          >
            Ajouter
          </button>
        </div>
        <div className="more-Info">
          {showMore ? (
            <IoIosArrowDropup
              onClick={() => setShowMore(false)}
              className="show-logo"
            />
          ) : (
            <IoIosArrowDropdown
              onClick={() => setShowMore(true)}
              className="show-logo"
            />
          )}

          {showMore && (
            <div className="display-info">
              <p>
                Vendu par : {detailProduct.firstname} {detailProduct.lastname}
              </p>
              <button type="button">
                <a href={sellerEmail}>Contactez le vendeur</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
