import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPopularTv } from 'api/services/movies.services.ts';

export const usePopularTv = () => {
  const { data: popularTv } = useQuery('popular tv', getPopularTv, {
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { popularTv };
};
