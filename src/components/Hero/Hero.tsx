import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getTrendingMovies } from 'api/services/movies.services.ts';
import { Section, Container, Poster } from './Hero.style';

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

// const arr = ['#04122e', '#320d3d', '#383200'];

const Hero = () => {
  const { data: movies } = useQuery('trending poster', getTrendingMovies);

  return (
    <Section>
      <Container>
        <Slider {...settings}>
          {movies &&
            movies.data.results.slice(0, 3).map(movie => (
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
