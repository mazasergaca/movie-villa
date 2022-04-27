import React, { FC } from 'react';

import { Item, Poster, Date, Name } from './ItemMovie.style';

import noPoster from '../../assets/not-found-poster.png';
interface ItemMovieProps {
  src: string;
  date: string;
  name: string;
}

const ItemMovie: FC<ItemMovieProps> = ({ src, date, name }) => {
  return (
    <Item>
      <Poster>
        <img
          src={src ? `https://image.tmdb.org/t/p/w500${src}` : noPoster}
          width="100%"
          alt={name}
        />
      </Poster>
      <Date>{date}</Date>
      <Name>{name}</Name>
    </Item>
  );
};

export default ItemMovie;
