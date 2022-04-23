import React, { FC } from 'react';
import Slider from 'react-slick';
import { Container } from '@mui/material';

import ItemMovie from 'components/ItemMovie/ItemMovie.tsx';
import { Section, Wrapper, Title, Link } from './BoxMovie.style';

interface BoxMovieProps {
  title: string;
}

// settings for react-slick
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 5,
  swipeToSlide: true,
};

const BoxMovie: FC<BoxMovieProps> = ({ movies, title }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Link href="#">View all</Link>
        </Wrapper>
        <Slider {...settings}>
          {movies &&
            movies?.data?.results.map(movie => (
              <div key={movie.id}>
                <ItemMovie
                  src={movie.poster_path}
                  date={movie.release_date || movie.first_air_date}
                  name={movie.original_title || movie.original_name}
                />
              </div>
            ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default BoxMovie;
