import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPersonMovies } from 'api/services/movies.services.ts';

export const usePersonMovies = (id: string) => {
  const { data: personMovies, refetch: refetchPersonMovies } = useQuery(
    'person movies',
    () => getPersonMovies(id),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );
  return { personMovies, refetchPersonMovies };
};
