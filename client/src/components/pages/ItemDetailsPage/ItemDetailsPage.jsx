import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { MdOutlineEuroSymbol, MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

import "./ItemDetailsPage.css";

import { useCart } from "../../../contexts/CartContext";
// import ModalCart from "../../Modal/ModalCart/ModalCart";

function ItemDetailsPage() {
 const {name, id} = useParams()
  const [showMore, setShowMore] = useState(false);
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

  useEffect(() => {
    if (
      detailProduct &&
      cart.some((item) => item.Id_product === detailProduct.Id_product)
    ) {
      setDisabledButton(true);
    }
  }, [cart, detailProduct]);

  const handleCart = (article) => {
    if (disabledButton) return;
    setCart((prevCart) => {
      const newCart = [...prevCart, article];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setDisabledButton(true);
    // setModalConfOpen(true);
  };

  if (!detailProduct) {
    return (
      <div>
        <h2>Product details not found</h2>
      </div>
    );
  }


  const sellerEmail = detailProduct ? `mailto:${detailProduct.mail}` : "";
  const formatPrice = (price) => Number(price.toFixed(2)).toLocaleString();


  return (
    <div id="ItemDetailsPage">
      <div className="container">
        <MdOutlineKeyboardBackspace
          className="goBackButton"
          onClick={() => navigate(-1)}
        />
        <div className="container-img">
          <img
            src={detailProduct.picture_jewell}
            alt={detailProduct.name}
            className="image-detail"
          />
        </div>

        <FaHeart className="heart-img" style={{color:"gray" }} />
      </div>

      <div className="container-text">
        <h2>{detailProduct.name}</h2>
        <p>{detailProduct.details}</p>
        <p className="price">
          <MdOutlineEuroSymbol className="euro-logo" />
          {formatPrice(detailProduct.price)}

        </p>
        <div className="container-button">
          <button
            type="button"
            className={`button-detail ${disabledButton ? "disabled" : ""}`}
            onClick={() => handleCart(detailProduct)}
          >
            Ajouter au panier
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
              <button type="button">
                <a href={sellerEmail}>Contactez le vendeur</a>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* {modalConfOpen && <ModalCart setModalConfOpen={setModalConfOpen} />} */}
    </div>
  );
}

export default ItemDetailsPage;
