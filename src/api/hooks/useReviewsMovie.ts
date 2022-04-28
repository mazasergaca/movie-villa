import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getReviewsMovie } from 'api/services/movies.services.ts';

export const useReviewsMovies = (id: string) => {
  const {
    data: reviewsMovie,
    refetch: refetchReviewsMovies,
    isFetching: isFetchingReviewsMovies,
  } = useQuery('reviews movie', () => getReviewsMovie(id), {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { reviewsMovie, refetchReviewsMovies, isFetchingReviewsMovies };
};
