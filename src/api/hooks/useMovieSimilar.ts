import { useQuery } from 'react-query';
import { getMovieSimilar } from 'api/services/movies.services.ts';

export const useMovieSimilar = (id: string) => {
  const {
    data: movieSimilar,
    refetch: refetchMoviesSimilar,
    isFetching: isFetchingMoviesSimilar,
  } = useQuery('movie somilar', () => getMovieSimilar(id));
  return { movieSimilar, refetchMoviesSimilar, isFetchingMoviesSimilar };
};
