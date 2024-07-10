import {  useNavigate,useParams} from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./ItemsPage.css";
import { useEffect, useState } from "react";
import Card from "../../Card/Card";
import Flower from "../../../assets/images/illustrations/flower2.png";
import Flower2 from "../../../assets/images/illustrations/flower1.jpg";
import Flower3 from "../../../assets/images/illustrations/flower2bis.png";
import { useCart } from "../../../contexts/CartContext";

function ItemsPage() {
  const {name, id} = useParams();
  const navigate = useNavigate();
  const {cart, setCart} = useCart();
  const [showProducts, setShowProduct] = useState([]);
  

  const ApiUrl =import.meta.env.VITE_API_URL;

  useEffect(()=>{
    fetch(`${ApiUrl}/api/product/product-by-category/${id}`)
    .then((res) => res.json())
    .then((data) => setShowProduct(data))
    .catch((err) => console.error(err));
  },[ApiUrl, name, id])

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setCart(JSON.parse(initialLocalCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const ascendingPrice = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/product/ascending-prices/${id}`);
      const result = await response.json();

      if(response.ok){
        setShowProduct(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const descendingPrice = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/product/descending-prices/${id}`);
      const result = await response.json();
      if(response.ok){
        setShowProduct(result)
      }
    } catch (error) {
      console.error(error)
    }
  }
         

  return (
    <div id="ItemsPage">
      <h2>{name.toUpperCase()}</h2>
      <MdOutlineKeyboardBackspace className="goBackButton" onClick={() => navigate(-1)} style={{ marginLeft: "20px" }} />
      <div className="the-filter">
        <div>
          <button type="button" onClick={ascendingPrice} >Prix croissant</button>
          <button type="button" onClick={descendingPrice}>Prix décroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>
      <div className="container-items">
        {showProducts.map((product, index) => (
          <>
          <Card key={product.Id_product} product={product} cart={cart}
            setCart={setCart} />
          {(index + 1) % 6 === 0 && (
              <img
                src={Math.floor(index / 6) % 2 === 0 ? Flower : Flower2}
                alt="Flower"
                className="illustrations-mobile"
              />
            )}
            {(index + 1) % 8 === 0 && (
              <img
                src={Math.floor(index / 8) % 2 === 0 ? Flower2 : Flower3}
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
