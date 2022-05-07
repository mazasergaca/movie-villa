import React, { useState, useEffect, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTrendingMovies } from 'api/hooks/useTrendingMovies';
import BoxPage from 'components/BoxPage';

const Trending: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { trendingMovies, refetchTrendingMovies, isLoadingTrendingMovies } =
    useTrendingMovies(page);

  const handleClick = (page: number) => {
    setPage(page);
    navigation({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    refetchTrendingMovies();
    window.scrollTo(0, 0);
  }, [page, refetchTrendingMovies]);

  return (
    <BoxPage
      isLoading={isLoadingTrendingMovies}
      title="Trending"
      movies={trendingMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default Trending;
