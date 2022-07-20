import React from 'react';
import octocat from '../../assets/images/404.png';
import './404.css';

const NotFound = () => (
  <section className="notFound">
    <div className="notFoundWrapper">
      <img src={octocat} alt="octocat" />
      <h1>Dev Not Found</h1>
      <span>Return Home</span>
    </div>
  </section>
);

export default NotFound;
