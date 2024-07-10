import { useEffect, useState } from "react";
import "./SuccessPage.css";

function SuccessPage() {
  const [items, setItems] = useState([]);
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();
  const getTotal = () => items.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setItems(JSON.parse(initialLocalCart));
    }
  }, []);

  return (
    <div id="SuccessPage">
      <h1>Confirmation et Commande</h1>
      <div className="container-add">
          <div className="all-carts">
            {items.map((item) => (
              <div key={item.Id_product} className="cart-container">
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
                    <span className="price">€{formatPrice(item.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-recap">
            <h2>Récapitulatif:</h2>

            <h3>Numéro de commande:</h3>
            <p>RFGTGR</p>
            <h3>Date de la commande:</h3>
            <p>mercredi 03 juillet 2024</p>
            <h3>Coordonnées:</h3>
            <p>coline.grosso@gmail.com</p>
            <h3>Adresse de facturation:</h3>
            <p>95 rue de toto</p>
            <h3>Adresse de livraison:</h3>
            <p>95 rue de tata</p>
            <h3>Détails de paiement:</h3>
            <p>toto tata</p>
            <span className="cart-total">
              <h2>Total:</h2>
              <span id="total">€{formatPrice(getTotal())}</span>
            </span>
          </div>
      </div>
    </div>
  );
}

export default SuccessPage;
