import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getImagesMovie } from 'api/services/movies.services.ts';

export const useMovieImages = (id: string) => {
  const { data: movieImages, refetch: refetchMovieImages } = useQuery(
    'movie images',
    () => getImagesMovie(id),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { movieImages, refetchMovieImages };
};
