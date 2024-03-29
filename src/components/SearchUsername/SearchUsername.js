import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import './SearchUsername.css';

const SearchUsername = ({
  setUsername, setLoading, setStatus, lightMode,
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

  const light = {};
  const lightBox = {};

  if (lightMode) {
    light.backgroundColor = '#fff';
    light.color = '#000';
  }

  if (lightMode) {
    lightBox.backgroundColor = '#d3d3d3';
    lightBox.color = '#000';
  }

  return (
    <section className="searchBarContainer" style={light}>
      <div className="userSearch">
        <BiSearch className="searchIcon" />
        <form onSubmit={(e) => e.preventDefault()} style={light}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} style={light} value={search} placeholder="Search GitHub username..." />
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
  lightMode: PropTypes.bool.isRequired,
};

export default SearchUsername;
