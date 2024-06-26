import { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  const[showMore, setShowMore] = useState(false)
  const location = useLocation();
  const { details: detailProduct } = location.state || {};
 
  const sellerEmail = `mailto:${detailProduct.mail}`

  if (!detailProduct) {
    return <div><h2>Product details not found</h2></div>;
  }

  return (
    <div id="ItemDetailsPage">

      <div className="container">
        <div className="container-img">
          <img src={detailProduct.picture_validation} alt={detailProduct.name} className="image-detail" />
        </div>
        <FaHeart className="heart-img" />
      </div>
      <div className="container-text">
        <h2>{detailProduct.name}</h2>
        <p className='price'> <MdOutlineEuroSymbol className="euro-logo" /> {detailProduct.price}</p>
        <p>{detailProduct.details}</p>
        <div className="container-button">
          <button type="button" className="button-detail">
            Ajouter
          </button>
        </div>
      <div className="more-Info">
      { showMore ?(<IoIosArrowDropup  onClick={()=>setShowMore(false)} className='show-logo'/>) : (<IoIosArrowDropdown  onClick={()=>setShowMore(true)} className='show-logo'/>) }

        {showMore &&<div className="display-info">
          <p>
         Vendu par : {detailProduct.firstname} {detailProduct.lastname} 
          </p>
       <button type='button'> <a href={sellerEmail}>Contactez le vendeur</a></button>
        </div>}
      </div>

      </div>
    </div>
  );
}

export default ItemDetailsPage;
