import { useQuery } from 'react-query';
import { getMovieCast } from 'api/services/movies.services.ts';

export const useMovieCast = (id: string) => {
  const {
    data: movieCast,
    refetch: refetchMovieCast,
    isFetching: isFetchingMovieCast,
  } = useQuery('movie cast', () => getMovieCast(id));

  return { movieCast, refetchMovieCast, isFetchingMovieCast };
};
