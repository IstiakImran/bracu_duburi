import React from 'react';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import HeroCarousel from './Components/HeroCarousol/HeroCarousol';
import Card from './Components/Card/Card';
import SponsorCarousel from './Components/SponsorCarousel/SponsorCarousel';
import TeamsHome from './Components/TeamsHome/TeamsHome';

const Home = () =>{

  const cards = [
    { image: 'https://bracu-duburi.com/assets/img/v1_1.png', title: 'Duburi 1.0' },
    { image: 'https://bracu-duburi.com/assets/img/v2_1.png', title: 'Duburi 2.0' },
    { image: 'https://bracu-duburi.com/assets/img/v3_1.png', title: 'Duburi 3.0' },
    { image: 'https://bracu-duburi.com/assets/img/v4.png', title: 'Duburi 4.0' },
  ];

  return (
    <>
     {/* <Carousel></Carousel> */}
     <HeroBanner></HeroBanner>
     <HeroCarousel></HeroCarousel>

     <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
    <SponsorCarousel></SponsorCarousel>
    <TeamsHome></TeamsHome>


    </>
  )
}

export default Home;
