import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMovieSimilar } from 'api/services/movies.services.ts';

export const useMovieSimilar = id => {
  const {
    data: movieSimilar,
    refetch: refetchMoviesSimilar,
    isFetching: isFetchingMoviesSimilar,
  } = useQuery('movie somilar', () => getMovieSimilar(id), {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return { movieSimilar, refetchMoviesSimilar, isFetchingMoviesSimilar };
};
