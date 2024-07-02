import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Nav.css";

function SearchResult({ setShowInput, results }) {
  return (
    <div id="searchResult">
      <div className="result-container">
        {results.map((product) => (
          <Card
            key={product.Id_product}
            product={product}
            setShowInput={setShowInput}
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
