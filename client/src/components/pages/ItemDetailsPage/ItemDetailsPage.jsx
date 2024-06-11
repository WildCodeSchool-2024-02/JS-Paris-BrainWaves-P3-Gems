import { FaHeart } from "react-icons/fa";
import detail from "./ItemData";
import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  return (
    <div id="ItemDetailsPage">
      <div className="container">
        <div className="container-img">
          <img src={detail.picture_jewell} alt="necklace" className="image-detail" />
        </div>
        <FaHeart className="heart-img" />
      </div>
      <div className="container-text">
        <h3>{detail.name}</h3>
        <p>{detail.details}</p>
        <p>{detail.price}</p>
        <div className="container-button">
          <button type="button" className="button-detail">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
