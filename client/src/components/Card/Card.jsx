import { useNavigate } from "react-router-dom";
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import PropTypes from "prop-types";

function Card({ product, setShowInput }) {
  const port = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleCard = () => {
    fetch(`${port}/api/product/single-Product/${product.Id_product}`)
      .then((res) => res.json())
      .then((data) =>
        navigate(`/ItemDetailsPage/${product.Id_product}`, {
          state: { details: data },
        })
      )
      .catch((err) => console.error(err));

    setShowInput(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCard();
    }
  };

  const addToWishList = () =>{
    navigate("/profilePage")
  }

  return (
    <div className="card">
      <img
        className="card-picture"
        src={product.picture_jewell}
        alt={product.name}
        onClick={handleCard}
        onKeyDown={handleKeyDown}
        role="presentation"
      />
      <FaRegHeart className="heart-logo" />
      <div className="logo-container">
        <div>
          <HiOutlineShoppingBag className="icon" />
        </div>
        <div
          onClick={addToWishList}
          onKeyDown={addToWishList}
          role="presentation"
        >
          <FaRegHeart className="icon" />
        </div>
        <div>
          <SlOptionsVertical onClick={handleCard} className="icon" />
        </div>
      </div>
      <div className="card-title">
        <p className="title">{product.name}</p>
        <div className="price-and-logo">
          <HiOutlineShoppingBag className="panier" />
          <p className="price">
            <MdOutlineEuroSymbol className="euro-logo" />
            <span>{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  setShowInput: PropTypes.func.isRequired,
  product: PropTypes.shape({
    Id_product: PropTypes.number.isRequired,
    picture_jewell: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
