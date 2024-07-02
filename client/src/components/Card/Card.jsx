import { useNavigate } from "react-router-dom";
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

function Card({ product, favorites, setFavorites }) {
  const port = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const isFavorite = favorites.includes(product.Id_product);

  function handleCard() {
    fetch(`${port}/api/product/single-Product/${product.Id_product}`)
      .then((res) => res.json())
      .then((data) =>
        navigate(`/ItemDetails/${product.Id_product}`, {
          state: { details: data },
        })
      )
      .catch((err) => console.error(err));
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCard();
    }
  };

  async function addToWishList(prod, user) {
    try {
      const response = await fetch(`${port}/api/wishlist/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id_product: prod, Id_user: user }),
      });

      if (response.status === 200) {
        toast.success("Ajouté aux favoris", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
          theme: "dark",
          closeOnClick: true,
        });

        const newFavorites = [...favorites, prod];
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        return response.json();
      }

      toast.info("Déjà dans vos favoris", {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
        theme: "dark",
        closeOnClick: true,
      });
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async function removeFromWishList(prod, user) {
    try {
      const response = await fetch(`${port}/api/wishlist/unlike`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id_product: prod, Id_user: user }),
      });

      if (response.status === 200) {
        toast.success("Retiré des favoris", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
          theme: "dark",
          closeOnClick: true,
        });

        const newFavorites = favorites.filter((id) => id !== prod);
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        return response.json();
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
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
      <FaHeart
        onClick={() =>  addToWishList(product.Id_product, 2)}

        onDoubleClick={() =>  removeFromWishList(product.Id_product, 2)}
        role="presentation"
        className="heart-logo"
        style={{ color: isFavorite ? "white" : "gray" }}
      />
      <div className="logo-container">
        <div>
          <HiOutlineShoppingBag className="icon" />
        </div>
        <div
          onClick={() => (isFavorite ? removeFromWishList(product.Id_product, 2) : addToWishList(product.Id_product, 2))}
          role="presentation"
        >
          <FaHeart
            className="icon"
            style={{ color: isFavorite ? "white" : "gray" }}
          />
        </div>
        <div>
          <SlOptionsVertical className="icon" onClick={()=> handleCard()} />
        </div>
      </div>


      <div className="card-title">
        <p className="title">{product.name}</p>
        <div className="price-and-logo">
          <HiOutlineShoppingBag className="cart" />
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
  product: PropTypes.shape({
    Id_product: PropTypes.number.isRequired,
    picture_jewell: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  favorites: PropTypes.func.isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default Card;
