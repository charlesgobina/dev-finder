import React from 'react';
import PropTypes from 'prop-types';
import { BiSun } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';
import './TitleBar.css';

const TitleBar = ({ setLightMode, lightMode }) => {
  const handleClick = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <div className="titleBar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>devfinder</h1>
      <div className="themeSwitch">
        <a data-tooltip-id="my-tooltip" href="#tooltip" data-tooltip-content="Coming Soon">
          <BiSun size={25} />
        </a>
        <p>{lightMode ? 'light' : 'dark'}</p>
        <Tooltip id="my-tooltip">
          <button onClick={handleClick} type="button">
            {/* {lightMode ? <BiSun size={25} /> : <BiMoon size={25} />} */}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  setLightMode: PropTypes.func.isRequired,
  lightMode: PropTypes.bool.isRequired,
};

export default TitleBar;
