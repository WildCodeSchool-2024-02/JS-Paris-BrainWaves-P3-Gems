import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { MdOutlineEuroSymbol, MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

import "./ItemDetailsPage.css";

import { useCart } from "../../../contexts/CartContext";

function ItemDetailsPage() {
 const {name, id} = useParams()
  const [showMore, setShowMore] = useState(false);
  const {favorite} = useOutletContext()
 const navigate = useNavigate()
  const { cart, setCart } = useCart();
  const [disabledButton, setDisabledButton] = useState(false);
  const [detailProduct, setDetailProduct]= useState([]);

  

  const apiUrl = import.meta.env.VITE_API_URL

useEffect(()=>{
  fetch(`${apiUrl}/api/product/single-Product/${id}`)
  .then((res) => res.json())
  .then((data) =>setDetailProduct(data))
  .catch((error)=> console.error(error))
  
  .catch((err) => console.error(err));
},[apiUrl, id, name])

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

  const sellerEmail = detailProduct ? `mailto:${detailProduct.mail}` : "";
  return (
    <div id="ItemDetailsPage">

      <MdOutlineKeyboardBackspace className="goBackButton" onClick={()=> navigate(-1)}/>

      <div className="container">
        <div className="container-img">
          <img
            src={detailProduct.picture_validation}
            alt={detailProduct.name}
            className="image-detail"
          />
        </div>
        <FaHeart className="heart-img" style={{color: favorite ? "white" : "gray" }} />
      </div>
      <div className="container-text">
        <h2>{detailProduct.name}</h2>
        <p className="price">
          <MdOutlineEuroSymbol className="euro-logo"/> {detailProduct.price}
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
