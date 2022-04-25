import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getUpcomingMovie } from 'api/services/movies.services.ts';

export const useUpcomingMovies = (page: number) => {
  const { data: upcomingMovies, refetch } = useQuery(
    'upcoming movies',
    () => getUpcomingMovie(page),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { upcomingMovies, refetch };
};
