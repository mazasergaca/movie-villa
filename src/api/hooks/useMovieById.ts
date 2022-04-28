import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMovieById } from 'api/services/movies.services.ts';

export const useMovieById = id => {
  const {
    data: movieById,
    refetch: refetchMovieById,
    isFetching: isFetchingMovieById,
  } = useQuery('movie by id', () => getMovieById(id), {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return {
    movieById,
    refetchMovieById,
    isFetchingMovieById,
  };
};
