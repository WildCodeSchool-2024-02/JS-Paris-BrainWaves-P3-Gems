
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import picture from "../../assets/images/categoryPhotos/necklace.png";

function Card (){
  return (
    <div className='card'>
          <img className="card-picture" src={picture} alt="" />
          <FaRegHeart className="heart-logo" />
          <div className="logo-container">
            <div>
              <HiOutlineShoppingBag className="icon" />
            </div>

            <div>
              <FaRegHeart className="icon" />
            </div>

            <div>
              <SlOptionsVertical className="icon" />
            </div>
          </div>

          <div className="card-title">
            <p className="title">Bracelet en or 12 carats</p>
            <div className="price-and-logo">
              <HiOutlineShoppingBag className="panier" />
              <p className="price">
                <MdOutlineEuroSymbol className="euro-logo" />
                <span> 1200</span>
              </p>
            </div>
          </div>
    </div>
  )
}

export default Card
