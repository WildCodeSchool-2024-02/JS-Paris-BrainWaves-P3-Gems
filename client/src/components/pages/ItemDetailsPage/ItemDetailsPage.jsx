import { FaHeart } from "react-icons/fa";
import necklace from "../../../assets/images/categoryPhotos/necklace.png";
import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  return (
    <div id="ItemDetailsPage">
      <div className="container">
        <div className="container-img">
          <img src={necklace} alt="necklace" className="image-detail" />
        </div>
        <FaHeart className="heart-img" />
      </div>
      <div className="container-text">
        <h3>Collier en or 24 carats</h3>
        <p>Marque Tiffany & Co, sertie de 40 diamants</p>
        <p>€1.200</p>
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
