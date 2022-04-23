import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMoviesByName } from 'api/services/movies.services.ts';

export const useMoviesByName = (name: string) => {
  const { data: moviesByName, refetch } = useQuery(
    'movies by name',
    () => getMoviesByName(name),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { moviesByName, refetch };
};
