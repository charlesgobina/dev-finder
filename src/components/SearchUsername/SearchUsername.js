import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = () => (
  <section className="searchBarContainer">
    <div className="userSearch">
      <BiSearch className="searchIcon" />
      <input type="text" placeholder="Search GitHub username..." />
      <button type="button">Search</button>
    </div>
  </section>

);

export default SearchUsername;
