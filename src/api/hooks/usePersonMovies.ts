import { useQuery } from 'react-query';
import { getPersonMovies } from 'api/services/movies.services.ts';

export const usePersonMovies = (id: string) => {
  const { data: personMovies, refetch: refetchPersonMovies } = useQuery(
    'person movies',
    () => getPersonMovies(id)
  );
  return { personMovies, refetchPersonMovies };
};
