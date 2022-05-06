import React, { FC } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { Container } from '@mui/material';

import { makeSlug } from 'services/make-slug';
import { sliderSettingsForBoxCast } from 'services/slider-settings';
import noPhoto from 'assets/no_photo.png';
import { Wrapper, Title, Item, Name, Poster, Backdrop } from './BoxCast.styles';

interface BoxCastProps {
  cast: any;
  title: string;
}

interface ItemI {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
}

const BoxCast: FC<BoxCastProps> = ({ cast, title }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>

        <Slider {...sliderSettingsForBoxCast}>
          {cast &&
            cast?.data.cast.map(
              ({ id, name, original_name, profile_path }: ItemI) => (
                <div key={id}>
                  <Link
                    to={{
                      pathname: `/movies/person/${makeSlug(
                        name || original_name
                      )}-${id}`,
                    }}
                  >
                    <Item>
                      <Poster>
                        <img
                          src={
                            profile_path
                              ? `https://image.tmdb.org/t/p/w500${profile_path}`
                              : noPhoto
                          }
                          width="100%"
                          alt={name || original_name}
                        />
                        <Backdrop>
                          <AiFillEye size="38px" />
                        </Backdrop>
                      </Poster>
                      <Name>{name || original_name}</Name>
                    </Item>
                  </Link>
                </div>
              )
            )}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default BoxCast;
