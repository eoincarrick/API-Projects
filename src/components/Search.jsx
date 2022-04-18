import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Search.css';

const Search = () => {
  return (
    <div className='searchContainer'>
      <button type='submit'>
        <FaSearch className='searchIcon' />
      </button>
      <input
        type='text'
        name='text'
        placeholder='search here'
        className='searchInput'
      />
    </div>
  );
};

export default Search;
