import React, { FC } from 'react';
import { AiFillEye } from 'react-icons/ai';

import { Item, Poster, Date, Name, Backdrop } from './ItemMovie.styles';
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
        <Backdrop>
          <AiFillEye size="34px" />
        </Backdrop>
      </Poster>
      <Date>{date}</Date>
      <Name>{name}</Name>
    </Item>
  );
};

export default ItemMovie;
