import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddToCart.css";
import { useCart } from "../../../contexts/CartContext";

function AddToCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const {setCart} = useCart()

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setItems(JSON.parse(initialLocalCart));
    }
  }, []);

  const handleHomePageClick = () => {
    navigate("/");
  };

  const handleRemoveItem = (IdProduct) => {
    const updatedItems = items.filter((item) => item.Id_product !== IdProduct);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems)
  };  
  
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();
  
  const getTotal = () => items.reduce((total, item) => total + item.price, 0);
  
  return (
    <div id="AddToCart">
      <h1>Panier</h1>
      <div className="container-add">
        {items.length === 0 ? (
          <div className="empty-cart">
            <p className="text-empty-cart">Votre panier est vide.</p>
            <button onClick={handleHomePageClick} type="button">
              Retour à la page d'accueil
            </button>
          </div>
        ) : (
          <>
            <div className="all-carts">
              {items.map((item) => (
                <div key={item.id} className="cart-container">
                  <img
                    className="cart-img"
                    src={item.picture_jewell}
                    alt={item.name}
                  />
                  <div className="info-price-container">
                    <div className="info-name">
                      <h2>{item.name}</h2>
                                  </div>
                    <div className="item-details">
                      <button
                        className="remove-item"
                        type="button"
                        onClick={() => handleRemoveItem(item.Id_product)}
                      >
                        Supprimer
                      </button>
                      <span className="price">€{formatPrice(item.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-desktop">
              <div className="cart-total">
                <h2>Sous-total:</h2>
                <span id="total">€{formatPrice(getTotal())}</span>

              </div>
              <div className="cart-actions">
                <button
                  onClick={handleHomePageClick}
                  className="continue-shopping"
                  type="button"
                >
                  Continuer la commande
                </button>
                <button className="proceed-payment" type="button">
                  Procéder au paiement
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
