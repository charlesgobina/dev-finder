import React, { useState } from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import SearchUsername from '../components/SearchUsername/SearchUsername';
import UserInfo from '../components/UserInfo/UserInfo';
import NotFound from '../components/404/404';
import Footer from '../components/Footer/Footer';
import './Finder.css';

const Finder = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(200);
  return (
    <main className="devFinder">
      <TitleBar />
      <SearchUsername
        setUsername={setUsername}
        setLoading={setLoading}
        setStatus={setStatus}
        className="searchUsername"
      />
      <>
        {
          loading && status === 200 ? 'Data is Loading' : !loading && status === 200 ? <UserInfo user={username} /> : <NotFound />
        }
      </>
      <Footer />
    </main>
  );
};

export default Finder;
