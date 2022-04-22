import React, { FC } from 'react';
import Slider from 'react-slick';
import { Container } from '@mui/material';

import {
  Section,
  Wrapper,
  Title,
  Link,
  Item,
  Poster,
  Date,
  Name,
  Genre,
} from './BoxMovie.style';

interface BoxMovieProps {
  title: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 5,
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
          {movies.map((color, index) => (
            <div key={index}>
              <Item>
                <Poster color={color}></Poster>
                <Date>USA, 2022</Date>
                <Name>Batman Begin</Name>
                <Genre>Action, Thriller</Genre>
              </Item>
            </div>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default BoxMovie;
