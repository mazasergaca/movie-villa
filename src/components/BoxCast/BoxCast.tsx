import React, { FC } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { AiFillEye } from 'react-icons/ai';
import { Container } from '@mui/material';

import noPhoto from 'assets/no_photo.png';
import {
  Wrapper,
  Title,
  Item,
  Name,
  Poster,
  Backdrop,
} from 'components/BoxCast/BoxCast.styles';

// settings for react-slick
const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 7,
  slidesToShow: 7,
  swipeToSlide: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
      },
    },
  ],
};
//make slug for pathname
const makeSlug = (string: string) => slugify(string, { lower: true });

interface BoxCastProps {
  cast: any;
  title: any;
}

const BoxCast: FC<BoxCastProps> = ({ cast, title }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>

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
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                            : noPhoto
                        }
                        width="100%"
                        alt={actor.name || actor.original_name}
                      />
                      <Backdrop>
                        <AiFillEye size="38px" />
                      </Backdrop>
                    </Poster>
                    <Name>{actor.name || actor.original_name}</Name>
                  </Item>
                </Link>
              </div>
            ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default BoxCast;
