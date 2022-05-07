import { useQuery } from 'react-query';
import { getTrendingMovies } from '../services/movies-services';

export const useTrendingMovies = (page: number) => {
  const {
    data: trendingMovies,
    refetch: refetchTrendingMovies,
    isLoading: isLoadingTrendingMovies,
  } = useQuery('trending movies', () => getTrendingMovies(page));

  return { trendingMovies, refetchTrendingMovies, isLoadingTrendingMovies };
};
