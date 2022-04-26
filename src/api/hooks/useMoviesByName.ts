import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getMoviesByName } from 'api/services/movies.services.ts';

export const useMoviesByName = (name: string, page) => {
  const { data: moviesByName, refetch } = useQuery(
    'movies by name',
    () => getMoviesByName(name, page),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      enabled: false,
    }
  );

  return { moviesByName, refetch };
};
