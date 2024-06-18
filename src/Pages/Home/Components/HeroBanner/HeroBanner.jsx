import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="overlay-top"></div>
      <div className="content">
        <p>First Autonomous Underwater Vehicle in Bangladesh</p>
        <h1>BRACU DUBURI</h1>
      </div>
      <div className="overlay-bottom"></div>
    </div>
  );
};

export default HeroBanner;
