import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies';
import BoxPage from 'components/BoxPage';

const UpcomingMovies = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { upcomingMovies, refetch } = useUpcomingMovies(page);

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
      title="Upcoming movies"
      movies={upcomingMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default UpcomingMovies;
