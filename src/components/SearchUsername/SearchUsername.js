import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = () => {
  const [search, setSearch] = useState('');

  return (
    <section className="searchBarContainer">
      <div className="userSearch">
        <BiSearch className="searchIcon" />
        <form>
          <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search GitHub username..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchUsername;
