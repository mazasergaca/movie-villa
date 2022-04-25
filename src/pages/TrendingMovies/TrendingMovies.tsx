import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useTrendingMovies } from 'api/hooks/useTrendingMovies.ts';
import BoxPage from 'components/BoxPage';

const Trending = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { trendingMovies, refetch } = useTrendingMovies(page);
  console.log(trendingMovies);

  const handleClick = (page: number) => {
    setPage(page);
    navigation({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [page, refetch]);

  return (
    <BoxPage
      title="Trending"
      movies={trendingMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default Trending;
