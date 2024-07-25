import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Nav.css";
import { useCart } from "../../contexts/CartContext";

function SearchResult({ setShowInput, results }) {
  const {setCart} = useCart();

  return (
    <div id="searchResult">
      <div className="result-container">
        {results.map((product) => (
          <Card
            key={product.Id_product}
            product={product}
            setShowInput={setShowInput}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  setShowInput: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Id_product: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SearchResult;
