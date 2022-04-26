import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { Container } from '@mui/material';

import {
  Wrapper,
  Title,
  Item,
  Name,
  Poster,
} from 'components/BoxCast/BoxCast.style';

// settings for react-slick
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 7,
  swipeToSlide: true,
};
//make slug for pathname
const makeSlug = (string: string) => slugify(string, { lower: true });

const BoxCast = ({ cast, title }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
      <Slider {...settings}>
        {cast &&
          cast?.data?.cast.map(actor => (
            <div key={actor.id}>
              <Link
                to={{
                  pathname: `/movies/person/${makeSlug(
                    actor.name || actor.original_name
                  )}-${actor.id}`,
                }}
              >
                <Item>
                  <Poster>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      width="100%"
                      alt={actor.name || actor.original_name}
                    />
                  </Poster>
                  <Name>{actor.name || actor.original_name}</Name>
                </Item>
              </Link>
            </div>
          ))}
      </Slider>
    </Container>
  );
};

export default BoxCast;
