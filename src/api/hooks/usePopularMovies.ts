import { useQuery } from 'react-query';
import { getPopularMovies } from '../services/movies-services';

export const usePopularMovies = (page: number) => {
  const {
    data: popularMovies,
    refetch: refetchPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = useQuery('popular movies', () => getPopularMovies(page));
  return { popularMovies, refetchPopularMovies, isLoadingPopularMovies };
};
