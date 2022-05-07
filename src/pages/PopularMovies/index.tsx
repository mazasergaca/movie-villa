import React, { useEffect, useState, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { usePopularMovies } from 'api/hooks/usePopularMovies';
import BoxPage from 'components/BoxPage';

const PopularMovies: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { popularMovies, refetchPopularMovies, isLoadingPopularMovies } =
    usePopularMovies(page);

  const handleClick = (page: number): void => {
    setPage(page);
    navigation({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    refetchPopularMovies();
    window.scrollTo(0, 0);
  }, [page, refetchPopularMovies]);

  return (
    <BoxPage
      isLoading={isLoadingPopularMovies}
      title="Popular movies"
      movies={popularMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default PopularMovies;
