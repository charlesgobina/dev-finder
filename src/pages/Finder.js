import React, { useState } from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import SearchUsername from '../components/SearchUsername/SearchUsername';
import UserInfo from '../components/UserInfo/UserInfo';
import './Finder.css';

const Finder = () => {
  const [username, setUsername] = useState();
  return (
    <main className="devFinder">
      <TitleBar />
      <SearchUsername
        username={username}
        setUsername={setUsername}
        className="searchUsername"
      />
      <UserInfo user={username} />
      <div>Finder</div>
    </main>
  );
};

export default Finder;
