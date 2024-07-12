import { useEffect, useState } from "react";
import "./SuccessPage.css";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";

function SuccessPage() {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [items, setItems] = useState([]);
  const { setCart } = useCart();
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();
  const getTotal = () => items.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setItems(JSON.parse(initialLocalCart));
      localStorage.clear()
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('session_id');
    if (id) {
      setSessionId(id);
    }
  }, [location]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        if (sessionId){
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/stripe/${sessionId}`)
          const data = await response.json();

          if(response.ok){
            setSessionData(data)
          } else {
            console.error("failed to fetch data");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSession();
    setCart([])
  }, [sessionId, setCart]);

  const unixDate = sessionData?.created;
  const formatDate = new Date(unixDate*1000).toLocaleDateString("fr-FR");

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
            <p>{sessionData?.created}</p>
            <h3>Date de la commande:</h3>
            <p>{formatDate}</p>
            <h3>
              Nom:</h3>
            <p>{sessionData?.customer_details?.name}</p>
            <h3>Coordonnées:</h3>
            <p>{sessionData?.customer_details?.email}</p>
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
