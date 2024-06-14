import { useLocation } from "react-router-dom";

import "./ItemsPage.css";
import Card from "../../Card/Card";


function ItemsPage() {
  const location = useLocation()
  const  displayProduct  = location.state ;
 
  return (
    <div id="ItemsPage">
      <div className="the-filter">
        <div>
          <button type="button">Prix croissant</button>
          <button type="button">Prix decroissant</button>
        </div>
        <h3>FILTRER PAR</h3>
      </div>

      <div className="container-items">
        { displayProduct.map((product) => ( <Card key={product.id_product}  product={product}/> ))}
       
      </div>
    </div>
  );
}

export default ItemsPage;
