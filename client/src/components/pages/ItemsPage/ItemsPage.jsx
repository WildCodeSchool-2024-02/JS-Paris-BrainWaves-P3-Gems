import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./ItemsPage.css";
import Card from "../../Card/Card";

function ItemsPage() {
  const location = useLocation();
  const displayProduct = location.state;
  const navigate = useNavigate();
  const { favorites, setFavorites } = useOutletContext();

  return (
    <div id="ItemsPage">
      <h2>{displayProduct[0].name.toUpperCase()}</h2>
      <MdOutlineKeyboardBackspace onClick={() => navigate(-1)} style={{ marginLeft: "20px" }} />
      <div className="the-filter">
        <div>
          <button type="button" >Prix croissant</button>
          <button type="button" >Prix décroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>
      <div className="container-items">
        {displayProduct.map((product) => (
          <Card key={product.Id_product} product={product} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
