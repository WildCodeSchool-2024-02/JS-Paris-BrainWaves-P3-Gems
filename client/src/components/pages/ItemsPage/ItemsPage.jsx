import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./ItemsPage.css";
import { useEffect, useState } from "react";
import Card from "../../Card/Card";
import Flower from "../../../assets/images/illustrations/flower2.png"
import Flower2 from "../../../assets/images/illustrations/flower1.jpg"
import Flower3 from "../../../assets/images/illustrations/flower2bis.png"
import { useCart } from "../../../contexts/CartContext";
import ModalCart from "../../Modal/ModalCart/ModalCart";


function ItemsPage() {
  const location = useLocation();
  const displayProduct = location.state;
  const navigate = useNavigate();
  const { favorites, setFavorites } = useOutletContext();  
  const {cart, setCart} = useCart();
  const [modalConfOpen, setModalConfOpen] = useState(false);



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
      <MdOutlineKeyboardBackspace onClick={() => navigate(-1)} style={{ marginLeft: "20px" }} />
      <div className="the-filter">
        <div>
          <button type="button" >Prix croissant</button>
          <button type="button" >Prix décroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>
      <div className="container-items">
        {displayProduct.map((product, index) => (
          <>
          <Card key={product.Id_product} product={product} cart={cart}
            setCart={setCart}  favorites={favorites} setFavorites={setFavorites} setModalConfOpen={setModalConfOpen}/>
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
      {modalConfOpen && (
        <ModalCart
          setModalConfOpen={setModalConfOpen}
        />
      )}
    </div>
  );
}

export default ItemsPage;
