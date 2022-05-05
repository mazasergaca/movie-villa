import { useQuery } from 'react-query';
import { getImagesMovie } from '../services/movies-services';

export const useMovieImages = (id: string) => {
  const {
    data: movieImages,
    refetch: refetchMovieImages,
    isFetching: isFetchingMovieImages,
  } = useQuery('movie images', () => getImagesMovie(id));

  return { movieImages, refetchMovieImages, isFetchingMovieImages };
};
