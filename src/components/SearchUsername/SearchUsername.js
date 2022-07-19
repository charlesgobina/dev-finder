import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = ({ setUsername }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchQuery = async () => {
      if (search) {
        const queryInfo = await fetch(`https://api.github.com/users/${search}`);
        const queryInfoResolve = await queryInfo.json();
        if (queryInfoResolve.login && queryInfoResolve.login === search) {
          setUsername(queryInfoResolve);
        }
      }
    };
    searchQuery();
  }, [search]);

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

SearchUsername.propTypes = {
  setUsername: PropTypes.func.isRequired,
};

export default SearchUsername;
