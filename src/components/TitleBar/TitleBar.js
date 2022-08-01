import React from 'react';
import PropTypes from 'prop-types';
import { BiSun, BiMoon } from 'react-icons/bi';
import './TitleBar.css';

const TitleBar = ({ setLightMode, lightMode }) => {
  const handleClick = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <div className="titleBar">
      <h1>devfinder</h1>
      <div className="themeSwitch">
        <p>{ lightMode ? 'light' : 'dark' }</p>
        <button onClick={handleClick} type="button">
          { lightMode ? <BiSun size={25} /> : <BiMoon size={25} /> }
        </button>
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  setLightMode: PropTypes.func.isRequired,
  lightMode: PropTypes.bool.isRequired,
};

export default TitleBar;
