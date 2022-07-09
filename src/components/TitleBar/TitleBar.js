import React, { useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import './TitleBar.css';

const TitleBar = () => {
  const [light, setLight] = useState(true);

  const handleClick = () => {
    setLight((prev) => !prev);
  };

  return (
    <div className="titleBar">
      <h1>devfinder</h1>
      <div className="themeSwitch">
        <p>{ light ? 'light' : 'dark' }</p>
        <button onClick={handleClick} type="button">
          { light ? <BiSun size={25} /> : <BiMoon size={25} /> }
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
