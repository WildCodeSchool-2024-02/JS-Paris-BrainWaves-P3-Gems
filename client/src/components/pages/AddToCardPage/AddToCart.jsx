import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AddToCart.css";
import bague from "../../../assets/images/Items/bague/2.webp";
import collier from "../../../assets/images/Items/coliers/2.webp";

function AddToCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Bague en or 12 carats",
      price: 1200,
      imageUrl: bague,
    },
    {
      id: 2,
      name: "Collier Argent Emeraude",
      price: 5400,
      imageUrl: collier,
    },
    {
      id: 3,
      name: "Collier Argent Emeraude",
      price: 5500,
      imageUrl: collier,
    },
  ]);

  const handleHomePageClick = () => {
    navigate("/");
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotal = () => items.reduce((total, item) => total + item.price, 0);

  return (
    <div id="AddToCart">
      <h1>Panier</h1>
      <div className="container-add">
        {items.length === 0 ? (
          <div className="empty-cart">
            <p className="text-empty-cart">Votre panier est vide.</p>
            <button onClick={handleHomePageClick} type="button">
            Continuer vos achats
            </button>
          </div>
        ) : (
          <>
            <div>
              {items.map((item) => (
                <div key={item.id} className="cart-container">
                  <img
                    className="cart-img"
                    src={item.imageUrl}
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
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Supprimer
                      </button>
                      <span>€{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-desktop">
              <div className="cart-total">
                <h2>Sous-total</h2>
                <span>€{getTotal().toFixed(2)}</span>
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
