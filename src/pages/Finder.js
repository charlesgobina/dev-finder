import React from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import SearchUsername from '../components/SearchUsername/SearchUsername';
import UserInfo from '../components/UserInfo/UserInfo';
import './Finder.css';

const Finder = () => (
  <main className="devFinder">
    <TitleBar />
    <SearchUsername className="searchUsername" />
    <UserInfo />
    <div>Finder</div>
  </main>
);

export default Finder;
