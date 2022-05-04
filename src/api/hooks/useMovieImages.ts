import { useQuery } from 'react-query';
import { getImagesMovie } from 'api/services/movies.services.ts';

export const useMovieImages = (id: string) => {
  const {
    data: movieImages,
    refetch: refetchMovieImages,
    isFetching: isFetchingMovieImages,
  } = useQuery('movie images', () => getImagesMovie(id));

  return { movieImages, refetchMovieImages, isFetchingMovieImages };
};
