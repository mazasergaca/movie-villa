import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Section, Poster } from './Hero.style';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
};

const arr = ['#04122e', '#320d3d', '#383200'];

const Hero = () => {
  return (
    <Section>
      <div style={{ height: '100%' }}>
        <Slider {...settings}>
          {arr.map(color => (
            <div key={color}>
              <Poster color={color}></Poster>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Hero;
