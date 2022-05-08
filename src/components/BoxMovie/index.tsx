import React, { FC } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { makeSlug } from 'services/make-slug';
import { sliderSettingsForBoxMovie } from 'services/slider-settings';
import ItemMovie from 'components/ItemMovie';
import { Section, Wrapper, Title, LinkStyled } from './BoxMovie.styles';

interface BoxMovieProps {
  isLoading: boolean;
  movies: any;
  title: string;
  path?: string;
}

interface Item {
  id: number;
  original_title: string;
  original_name: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
}

const BoxMovie: FC<BoxMovieProps> = ({ isLoading, movies, title, path }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          {!isLoading ? (
            <Title>{title}</Title>
          ) : (
            <Skeleton variant="rectangular" width={192} height={55} />
          )}
          {path && !isLoading && <LinkStyled to={path}>View all</LinkStyled>}
          {isLoading && (
            <Skeleton variant="rectangular" width={68} height={23} />
          )}
        </Wrapper>
        <Slider {...sliderSettingsForBoxMovie}>
          {movies &&
            movies?.data?.results.map(
              ({
                id,
                original_title,
                original_name,
                poster_path,
                release_date,
                first_air_date,
              }: Item) => (
                <div key={id}>
                  <Link
                    to={{
                      pathname: `/movies/all/${makeSlug(
                        original_title || original_name
                      )}-${id}`,
                    }}
                  >
                    <ItemMovie
                      src={poster_path}
                      date={release_date || first_air_date}
                      name={original_title || original_name}
                    />
                  </Link>
                </div>
              )
            )}
        </Slider>
      </Container>
    </Section>
  );
};

export default BoxMovie;
