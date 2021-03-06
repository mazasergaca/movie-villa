import React, { useEffect, useState, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useRatedMovies } from 'api/hooks/useRatedMovies';
import BoxPage from 'components/BoxPage';

const TopRatedMovies: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { ratedMovies, refetchRatedMovies, isLoadingRatedMovies } =
    useRatedMovies(page);

  const handleClick = (page: number): void => {
    setPage(page);
    navigation({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    refetchRatedMovies();
    window.scrollTo(0, 0);
  }, [page, refetchRatedMovies]);

  return (
    <BoxPage
      isLoading={isLoadingRatedMovies}
      title="Top rated"
      movies={ratedMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default TopRatedMovies;
