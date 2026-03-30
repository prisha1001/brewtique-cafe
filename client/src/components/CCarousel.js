import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CCarousel.css';

const CCarousel = () => (
  <Carousel controls={false} indicators={false} fade interval={4000}>
    <Carousel.Item>
      <img src="https://i.pinimg.com/1200x/a4/fc/a0/a4fca06e9c4e376259f04f9bf07080ee.jpg" alt="Slide 1" className="carousel-img" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://i.pinimg.com/1200x/ac/8d/92/ac8d9277004a1b04a9119c3e8a607188.jpg" alt="Slide 2" className="carousel-img" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://i.pinimg.com/736x/81/c1/d3/81c1d37b8647f884c9ac1c18453cc81c.jpg" alt="Slide 3" className="carousel-img" />
    </Carousel.Item>
  </Carousel>
);

export default CCarousel;
