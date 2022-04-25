import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getRatedMovies } from 'api/services/movies.services.ts';

export const useRatedMovies = (page: number) => {
  const { data: ratedMovies, refetch } = useQuery(
    'rated movies',
    () => getRatedMovies(page),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );
  return { ratedMovies, refetch };
};
