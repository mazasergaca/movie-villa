import { useQuery } from 'react-query';
import { getReviewsMovie } from '../services/movies-services';

export const useReviewsMovies = (id: string) => {
  const {
    data: reviewsMovie,
    refetch: refetchReviewsMovies,
    isFetching: isFetchingReviewsMovies,
  } = useQuery('reviews movie', () => getReviewsMovie(id));

  return { reviewsMovie, refetchReviewsMovies, isFetchingReviewsMovies };
};
