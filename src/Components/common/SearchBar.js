import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../../styles/Components/Common/SearchBar.css';

const SearchBar = ({ placeholder, onClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        className="textInput"
      />
      <button className="searchButton" onClick={onClick}>
        <FiSearch size="1.5rem" color={'white'} />
      </button>
    </div>
  );
};

export default SearchBar;
