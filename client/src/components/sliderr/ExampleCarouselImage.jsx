
import React from 'react';
import './carouselImage.scss';

const ExampleCarouselImage = ({ imageUrl, text }) => (
  <div>
    {/* Your custom image rendering logic goes here */}
    <img src={imageUrl} alt={text} />
    <p>{text}</p>

  </div>
  
);

export default ExampleCarouselImage;
