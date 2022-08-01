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

  return (
    <main className="devFinder">
      <TitleBar
        setLightMode={setLightMode}
        lightMode={lightMode}
      />
      <SearchUsername
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
