import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'api/services/movies.services.ts';

export const useTrendingMovies = () => {
  const { data: trendingMovies } = useQuery(
    'trending movies',
    getTrendingMovies,
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { trendingMovies };
};
