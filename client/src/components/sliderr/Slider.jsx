import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import pic from '../../assets/pic.jpg';
import pic1 from '../../assets/pic1.jpg';
import './slider.scss';
const imageArray = [

  { imageUrl: pic, text: "To stay informed",caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."},
  { imageUrl: pic1, text: "to see the real story", caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio." },
];

const Slider = () => {
return (
    <div id="carouselExampleDark" className="carousel carousel-white slider">
      
    <Carousel>
    {imageArray.map((image, index) => (
          <Carousel.Item className= "w-100" key={index} interval={3000}>
            <ExampleCarouselImage  imageUrl={image.imageUrl} />
            <Carousel.Caption className="text-white">
              <h3>{image.text}</h3>
              <p>{image.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
   
      
    </div>
  );
}

export default Slider