
import "./Card.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineEuroSymbol } from "react-icons/md";
import PropTypes from 'prop-types';




function Card ({product}){
  return (
     <div  className='card'>
          <img className="card-picture" src={product.picture_jewell} alt="" />
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
  )
}

Card.propTypes = {
  product: PropTypes.shape({
    picture_jewell: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card

