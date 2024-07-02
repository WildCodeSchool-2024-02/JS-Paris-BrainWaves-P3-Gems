import { useLocation } from "react-router-dom";
import "./ItemsPage.css";
import { useEffect } from "react";
import Card from "../../Card/Card";
import Flower from "../../../assets/images/illustrations/flower2.png"
import Flower2 from "../../../assets/images/illustrations/flower1.jpg"
import Flower3 from "../../../assets/images/illustrations/flower2bis.png"
import { useCart } from "../../../contexts/CartContext";

function ItemsPage() {
  const location = useLocation();
  const displayProduct = location.state;
  const {cart, setCart} = useCart();

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setCart(JSON.parse(initialLocalCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div id="ItemsPage">
      <h2>{displayProduct[0].title.toUpperCase()}</h2>
      <div className="the-filter">
        <div>
          <button type="button">Prix croissant</button>
          <button type="button">Prix decroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>

      <div className="container-items">
        {displayProduct.map((product, index) => (
          <>
          <Card key={product.Id_product} product={product} cart={cart}
            setCart={setCart} />
          {(index + 1) % 6 === 0 && (
              <img
                src={(Math.floor(index / 6) % 2 === 0) ? Flower : Flower2}
                alt="Flower"
                className="illustrations-mobile"
              />
            )}
            {(index + 1) % 8 === 0 && (
              <img
                src={(Math.floor(index / 8) % 2 === 0) ? Flower2 : Flower3}
                alt="Flower"
                className="illustrations-desktop"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
