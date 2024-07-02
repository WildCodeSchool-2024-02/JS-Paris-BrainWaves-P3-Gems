import { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { MdOutlineEuroSymbol, MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  const[showMore, setShowMore] = useState(false)
  const location = useLocation();
  const { details: detailProduct } = location.state || {};
  const {favorite} = useOutletContext()
  const sellerEmail = `mailto:${detailProduct.mail}`
 const navigate = useNavigate()
  if (!detailProduct) {
    return <div><h2>Product details not found</h2></div>;
  }


  return (
    <div id="ItemDetailsPage">

      <MdOutlineKeyboardBackspace onClick={()=> navigate(-1)}/>

      <div className="container">
        <div className="container-img">
          <img src={detailProduct.picture_validation} alt={detailProduct.name} className="image-detail" />
          {detailProduct.validated === 1 && <div className="verified"> <p>Verified</p> </div>}
        </div>
        <FaHeart className="heart-img" style={{color: favorite ? "white" : "gray" }} />
      </div>
      <div className="container-text">
        <h2>{detailProduct.name}</h2>
        <p>{detailProduct.details}</p>
        <p> <MdOutlineEuroSymbol className="euro-logo" /> {detailProduct.price}</p>
        <div className="container-button">
          <button type="button" className="button-detail">
            Ajouter au panier
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
