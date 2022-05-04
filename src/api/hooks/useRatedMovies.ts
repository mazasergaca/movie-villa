import { useQuery } from 'react-query';
import { getRatedMovies } from 'api/services/movies.services.ts';

export const useRatedMovies = (page: number) => {
  const { data: ratedMovies, refetch } = useQuery('rated movies', () =>
    getRatedMovies(page)
  );
  return { ratedMovies, refetch };
};
