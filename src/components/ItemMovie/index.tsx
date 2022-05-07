import React, { FC } from 'react';
import { AiFillEye } from 'react-icons/ai';
import Skeleton from '@mui/material/Skeleton';

import { Item, Poster, Date, Name, Backdrop } from './ItemMovie.styles';
import noPoster from '../../assets/not-found-poster.png';

interface ItemMovieProps {
  isLoading?: boolean;
  src: string;
  date: string;
  name: string;
}

const ItemMovie: FC<ItemMovieProps> = ({ isLoading, src, date, name }) => {
  return (
    <>
      {!isLoading && (
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
      )}
      {isLoading && (
        <Item>
          <Skeleton variant="rectangular" width={200} height={280} />
          <Skeleton variant="text" width={64} height={15} />
          <Skeleton variant="text" width={112} height={23} />
        </Item>
      )}
    </>
  );
};

export default ItemMovie;
