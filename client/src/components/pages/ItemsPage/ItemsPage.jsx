import { useLocation } from "react-router-dom";
import "./ItemsPage.css";
import { useEffect, useState } from "react";
import Card from "../../Card/Card";

function ItemsPage() {
  const location = useLocation();
  const displayProduct = location.state;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setCart(JSON.parse(initialLocalCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div id="ItemsPage">
      <h2>{displayProduct[0].name.toUpperCase()}</h2>
      <div className="the-filter">
        <div>
          <button type="button">Prix croissant</button>
          <button type="button">Prix decroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>

      <div className="container-items">
        {displayProduct.map((product) => (
          <Card
            key={product.Id_product}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
