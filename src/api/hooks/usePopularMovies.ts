import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPopularMovies } from 'api/services/movies.services.ts';

export const usePopularMovies = () => {
  const { data: popularMovies } = useQuery('popular movies', getPopularMovies, {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return { popularMovies };
};
