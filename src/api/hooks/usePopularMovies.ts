import { useQuery } from 'react-query';
import { getPopularMovies } from 'api/services/movies.services.ts';

export const usePopularMovies = (page: number) => {
  const { data: popularMovies, refetch } = useQuery('popular movies', () =>
    getPopularMovies(page)
  );
  return { popularMovies, refetch };
};
