import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPersonDetails } from 'api/services/movies.services.ts';

export const usePersonDetails = id => {
  const { data: personDetails, refetch: refetchPersonDetails } = useQuery(
    'person details',
    () => getPersonDetails(id),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { personDetails, refetchPersonDetails };
};
