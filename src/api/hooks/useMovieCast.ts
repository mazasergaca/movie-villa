import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMovieCast } from 'api/services/movies.services.ts';

export const useMovieCast = (id: string) => {
  const {
    data: movieCast,
    refetch: refetchMovieCast,
    isFetching: isFetchingMovieCast,
  } = useQuery('movie cast', () => getMovieCast(id), {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { movieCast, refetchMovieCast, isFetchingMovieCast };
};
