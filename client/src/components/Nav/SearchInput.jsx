import './Nav.css';
import PropTypes from 'prop-types';

function SearchInput({ setShowInput }) {
  return (
    <div id="SearchInput">
      <input type="text" placeholder="recherchez" />
      <button type='button' onClick={() => setShowInput(false)} className='close-search'>X</button>
    </div>
  );
}

SearchInput.propTypes = {
  setShowInput: PropTypes.func.isRequired
};

export default SearchInput;
