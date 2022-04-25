import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPopularMovies } from 'api/services/movies.services.ts';

export const usePopularMovies = (page: number) => {
  const { data: popularMovies, refetch } = useQuery(
    'popular movies',
    () => getPopularMovies(page),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );
  return { popularMovies, refetch };
};
