import { useQuery } from 'react-query';
import { getMovieCast } from '../services/movies-services';

export const useMovieCast = (id: string) => {
  const {
    data: movieCast,
    refetch: refetchMovieCast,
    isFetching: isFetchingMovieCast,
  } = useQuery('movie cast', () => getMovieCast(id));

  return { movieCast, refetchMovieCast, isFetchingMovieCast };
};
