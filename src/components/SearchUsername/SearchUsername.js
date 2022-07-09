import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = () => (
  <div className="userSearch">
    <BiSearch />
    <input type="text" />
    <button type="button">Search</button>
  </div>
);

export default SearchUsername;
