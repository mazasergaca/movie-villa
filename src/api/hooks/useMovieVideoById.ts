import { useQuery } from 'react-query';
import { getMovieVideoById } from '../services/movies-services';

export const useMovieVideoById = (id: string) => {
  const {
    data: movieVideo,
    refetch: refetchMovieVideo,
    isFetching: isFetchingMovieVideo,
  } = useQuery('movie video', () => getMovieVideoById(id));

  return { movieVideo, refetchMovieVideo, isFetchingMovieVideo };
};
