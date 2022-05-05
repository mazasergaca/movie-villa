import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { usePopularMovies } from 'api/hooks/usePopularMovies';
import BoxPage from 'components/BoxPage';

const PopularMovies = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { popularMovies, refetch } = usePopularMovies(page);

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
      title="Popular movies"
      movies={popularMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default PopularMovies;
