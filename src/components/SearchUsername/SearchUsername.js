import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = ({
  setUsername, setLoading, setStatus,
}) => {
  const [search, setSearch] = useState('octocat');

  const searchQuery = async () => {
    if (search && search === 'octocat') {
      setLoading(true);
      const queryInfo = await fetch(`https://api.github.com/users/${search}`);
      setStatus(queryInfo.status);
      const queryInfoResolve = await queryInfo.json();
      if (queryInfoResolve.login && queryInfoResolve.login === search) {
        setLoading(false);
        setUsername(queryInfoResolve);
        setSearch('');
      }
    }
    if (search) {
      setLoading(true);
      const queryInfo = await fetch(`https://api.github.com/users/${search}`);
      setStatus(queryInfo.status);
      const queryInfoResolve = await queryInfo.json();
      if (queryInfoResolve.login && queryInfoResolve.login === search) {
        setLoading(false);
        setUsername(queryInfoResolve);
        setSearch('');
      }
    }
  };

  const handleUserSearch = () => {
    searchQuery();
  };

  useEffect(() => {
    searchQuery();
  }, []);

  return (
    <section className="searchBarContainer">
      <div className="userSearch">
        <BiSearch className="searchIcon" />
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search GitHub username..." />
          <button onClick={handleUserSearch} type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

SearchUsername.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default SearchUsername;
