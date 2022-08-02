import React, { useState } from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import SearchUsername from '../components/SearchUsername/SearchUsername';
import UserInfo from '../components/UserInfo/UserInfo';
import NotFound from '../components/404/404';
import Footer from '../components/Footer/Footer';
import './Finder.css';

const Finder = () => {
  const [lightMode, setLightMode] = useState(false);
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(200);

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
    <main className="devFinder" style={light}>
      <TitleBar
        setLightMode={setLightMode}
        lightMode={lightMode}
      />
      <SearchUsername
        lightMode={lightMode}
        setUsername={setUsername}
        setLoading={setLoading}
        setStatus={setStatus}
        className="searchUsername"
      />
      <>
        {
          loading && status === 200 ? 'Data is Loading' : !loading && status === 200 ? <UserInfo user={username || undefined} /> : <NotFound />
        }
      </>
      <Footer />
    </main>
  );
};

export default Finder;
