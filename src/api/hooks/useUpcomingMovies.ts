import { useQuery } from 'react-query';
import { getUpcomingMovie } from '../services/movies-services';

export const useUpcomingMovies = (page: number) => {
  const {
    data: upcomingMovies,
    refetch: refetchUpcomingMovies,
    isLoading: isLoadingUpcomingMovie,
  } = useQuery('upcoming movies', () => getUpcomingMovie(page));

  return { upcomingMovies, refetchUpcomingMovies, isLoadingUpcomingMovie };
};
