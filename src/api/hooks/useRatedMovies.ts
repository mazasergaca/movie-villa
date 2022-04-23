import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getRatedMovies } from 'api/services/movies.services.ts';

export const useRatedMovies = () => {
  const { data: ratedMovies } = useQuery('rated movies', getRatedMovies, {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return { ratedMovies };
};
