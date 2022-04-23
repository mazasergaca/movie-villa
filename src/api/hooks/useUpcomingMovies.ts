import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getUpcomingMovie } from 'api/services/movies.services.ts';

export const useUpcomingMovies = () => {
  const { data: upcomingMovies } = useQuery(
    'upcoming movies',
    getUpcomingMovie,
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { upcomingMovies };
};
