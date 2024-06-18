import React from 'react';
import './SponsorCarousel.css';

const SponsorCarousel = () => {
  const logos = [
    'https://bracu-duburi.com/assets/sponsor/daily.png',
    'https://bracu-duburi.com/assets/sponsor/somoy.png',
    'https://bracu-duburi.com/assets/sponsor/Nortek.png',
    'https://bracu-duburi.com/assets/sponsor/robu.png',
    'https://bracu-duburi.com/assets/sponsor/Robi%20Logo.png',
    'https://bracu-duburi.com/assets/sponsor/brac.png',
    'https://bracu-duburi.com/assets/sponsor/Vectornav.png',
    'https://bracu-duburi.com/assets/sponsor/DIP%20Foundation.png',
    'https://bracu-duburi.com/assets/sponsor/BlueRobotics.png',
    'https://bracu-duburi.com/assets/sponsor/justdot.png',
    'https://bracu-duburi.com/assets/sponsor/Montrims.png',
    'https://bracu-duburi.com/assets/sponsor/Aqualink.png'
    // Add more logos as needed
  ];

  const numItems = logos.length;

  // Calculate animation delay dynamically
  const calculateDelay = (index) => {
    return `calc(40s / ${numItems} * (${numItems - index}) * -1)`;
  };

  return (
   
      <div className="wrapper">
        {logos.map((logo, index) => (
          <div className={`item item${index + 1}`} key={index} style={{ animationDelay: calculateDelay(index) }}>
            <img className="itemimg" src={logo} alt={`Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>

  );
};

export default SponsorCarousel;
