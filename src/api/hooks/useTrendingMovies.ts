import { useQuery } from 'react-query';
import { getTrendingMovies } from '../services/movies-services';

export const useTrendingMovies = (page: number) => {
  const { data: trendingMovies, refetch } = useQuery('trending movies', () =>
    getTrendingMovies(page)
  );

  return { trendingMovies, refetch };
};
