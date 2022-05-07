import { useQuery } from 'react-query';
import { getRatedMovies } from '../services/movies-services';

export const useRatedMovies = (page: number) => {
  const {
    data: ratedMovies,
    refetch: refetchRatedMovies,
    isLoading: isLoadingRatedMovies,
  } = useQuery('rated movies', () => getRatedMovies(page));
  return { ratedMovies, refetchRatedMovies, isLoadingRatedMovies };
};
