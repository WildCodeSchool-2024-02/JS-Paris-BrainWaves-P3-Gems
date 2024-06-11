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
      <h3>Collier en or 24 carats</h3>
      <p>Blabla blabla blabla Bla</p>
      <p>€1.200</p>
      <div className="container-button">
        <button type="button" className="button-detail">
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
