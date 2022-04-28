import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMovieVideoById } from 'api/services/movies.services.ts';

export const useMovieVideoById = id => {
  const {
    data: movieVideo,
    refetch: refetchMovieVideo,
    isFetching: isFetchingMovieVideo,
  } = useQuery('movie video', () => getMovieVideoById(id), {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { movieVideo, refetchMovieVideo, isFetchingMovieVideo };
};
