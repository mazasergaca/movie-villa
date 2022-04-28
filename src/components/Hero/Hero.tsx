import React from 'react';
import Slider from 'react-slick';

import { useTrendingMovies } from 'api/hooks/useTrendingMovies.ts';
import { Section, Container, Poster } from './Hero.styles';

// settings for react-slick
const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Hero = () => {
  const { trendingMovies } = useTrendingMovies(1);

  return (
    <Section>
      <Container>
        <Slider {...settings}>
          {trendingMovies &&
            trendingMovies.data.results.slice(0, 3).map(movie => (
              <div key={movie.id}>
                <Poster color={movie.backdrop_path}></Poster>
              </div>
            ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default Hero;
