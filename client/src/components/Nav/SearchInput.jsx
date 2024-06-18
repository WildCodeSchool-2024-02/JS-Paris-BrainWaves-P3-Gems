import { useState } from "react";
import "./Nav.css";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

import SearchResult from "./SearchResult";

function SearchInput({ setShowInput }) {

  const port =import.meta.env.VITE_API_URL
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
    // handleClick()
  };

  const handleClick = async () => {
    try {
      await fetch(
        `${port}/api/product/searching_for_product?name=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data));
    } catch (error) {
      console.error(error)
      setResults('Désolé');
    }

    setInputValue("");
  };

  return (
    <div id="SearchInput">
      <input
        type="text"
        value={inputValue}
        placeholder="recherchez"
        onChange={handleInput}
        onKeyDown={(e) => e.key==='Enter'&& handleClick()}
      />
      <div className="search-btn-container">
        <button type="button" onClick={handleClick} className="close-search">
          <FaCheck />{" "}
        </button>

        <button
          type="button"
          onClick={() => setShowInput(false)}
          className="close-search"
        >
          <RiCloseLargeFill />{" "}
        </button>
      </div>

      <SearchResult setShowInput={setShowInput} results={results}  inputValue={inputValue} />
    </div>
  );
}

SearchInput.propTypes = {
  setShowInput: PropTypes.func.isRequired,
};

export default SearchInput;
