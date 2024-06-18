import React, { useState } from 'react';
import './HeroCarousol.css';

// Sample slides data structure
const slides = [
  { id: 1,type: 'img', content: 'https://www.bracu-duburi.com/assets/img/2023_team.JPG', text: 'The BRACU Duburi team is dedicated to building a welcoming community for enthusiasts who love underwater robots. Our goal is to make a place where people can freely share their ideas and knowledge, crafting new technologies that could change how things work beneath the water.', link: '/page1' },
  { id: 2,type: 'img', content: 'https://www.bracu-duburi.com/assets/img/duburi_team.jpg', text: 'Duburi is composed of 7 sub teams, each with its own role. The Mechanical & 3D Design team, for instance, deals with designing the physical parts, while the AI & Autonomous team focuses on smart decision-making. Sensor & Circuit, Control & Communication, Operations & Management, Research & Publication, and Outreach(Branding & Design) teams all have their unique responsibilities, making sure everything runs smoothly.', link: '/page2' },
  { id: 3,type: 'img', content: 'https://www.bracu-duburi.com/assets/img/2019.jpg', text: 'Our aim is to simplify complex underwater technology and make it accessible to all who share our passion. We believe that together, we can explore new depths and make a real impact in the world beneath the waves.', link: '/page3' }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <button className="left-arrow" onClick={prevSlide}>&lt;</button>
      <button className="right-arrow" onClick={nextSlide}>&gt;</button>
      {slides.map((slide, index) => (
        
       
        <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
            <div className="slide-content">
          {index === current && (
            <>
              {index % 2 === 0 ? (
                <>
                  {
                    slide.type === 'img' ? <div className="media"><img src={slide.content} alt="slide" /></div> : <div className="media"><img src={slide.content} alt="slide" /></div>
                  }
                  <div className="text">{slide.text}</div>
                </>
              ) : (
                <>
                  <div className="text">{slide.text}</div>
                  {
                    slide.type === 'img' ? <div className="media"><img src={slide.content} alt="slide" /></div> : <div className="media"><img src={slide.content} alt="slide" /></div>
                  }
                </>
              )}
            </>
          )}
          </div>
        
        </div>
   
   
      ))}
      <button className="learn-more"  onClick={() => window.location.href = 'https://www.bracu-duburi.com/'}>Learn More</button>

      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
