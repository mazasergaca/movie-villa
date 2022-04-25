import React, { FC } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { Container } from '@mui/material';

import ItemMovie from 'components/ItemMovie/ItemMovie.tsx';
import { Section, Wrapper, Title, LinkStyled } from './BoxMovie.style';

interface BoxMovieProps {
  title: string;
  path: string;
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
//make slug for pathname
const makeSlug = string => slugify(string, { lower: true });

const BoxMovie: FC<BoxMovieProps> = ({ movies, title, path }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <LinkStyled to={path}>View all</LinkStyled>
        </Wrapper>
        <Slider {...settings}>
          {movies &&
            movies?.data?.results.map(movie => (
              <div key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/all/${makeSlug(
                      movie.original_title || movie.original_name
                    )}-${movie.id}`,
                  }}
                >
                  <ItemMovie
                    src={movie.poster_path}
                    date={movie.release_date || movie.first_air_date}
                    name={movie.original_title || movie.original_name}
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default BoxMovie;
