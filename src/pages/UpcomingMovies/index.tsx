import React, { useEffect, useState, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies';
import BoxPage from 'components/BoxPage';

const UpcomingMovies: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('page');

  const [page, setPage] = useState(Number(searchParam) || 1);

  const { upcomingMovies, refetchUpcomingMovies, isLoadingUpcomingMovie } =
    useUpcomingMovies(page);

  const handleClick = (page: number): void => {
    setPage(page);
    navigation({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    refetchUpcomingMovies();
    window.scrollTo(0, 0);
  }, [page, refetchUpcomingMovies]);

  return (
    <BoxPage
      isLoading={isLoadingUpcomingMovie}
      title="Upcoming movies"
      movies={upcomingMovies}
      handleClick={handleClick}
      page={page}
    />
  );
};

export default UpcomingMovies;
