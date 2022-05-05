import { useQuery } from 'react-query';
import { getMoviesByName } from '../services/movies-services';

export const useMoviesByName = (name: string, page: number) => {
  const { data: moviesByName, refetch } = useQuery('movies by name', () =>
    getMoviesByName(name, page)
  );

  return { moviesByName, refetch };
};
