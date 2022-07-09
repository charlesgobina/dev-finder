import React from 'react';
import TitleBar from '../components/TitleBar/TitleBar';
import SearchUsername from '../components/SearchUsername/SearchUsername';
import './Finder.css';

const Finder = () => (
  <main className="devFinder">
    <TitleBar />
    <SearchUsername />
    <div>Finder</div>
  </main>
);

export default Finder;
