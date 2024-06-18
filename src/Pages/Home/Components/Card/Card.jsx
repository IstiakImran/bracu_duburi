import React from 'react';
import './Card.css'

const Card = ({ image, title }) => (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
      <button className="card-button">Explore</button>
    </div>
  );

export default Card;