import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMovieById } from '../services/movies-services';

export const useMovieById = (id: string) => {
  const {
    data: movieById,
    refetch: refetchMovieById,
    isFetching: isFetchingMovieById,
    isLoading: isLoadingMovieById,
    isError: isErrorMovieById,
  } = useQuery('movie by id', () => getMovieById(id), {
    onError: (error: any) => {
      toast.error('Not found movie');
    },
  });

  return {
    movieById,
    refetchMovieById,
    isFetchingMovieById,
    isLoadingMovieById,
    isErrorMovieById,
  };
};
