import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'api/services/movies.services.ts';

export const useTrendingMovies = (page: number) => {
  const { data: trendingMovies, refetch } = useQuery(
    'trending movies',
    () => getTrendingMovies(page),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { trendingMovies, refetch };
};
