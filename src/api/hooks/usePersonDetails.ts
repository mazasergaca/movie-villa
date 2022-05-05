import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPersonDetails } from '../services/movies-services';

export const usePersonDetails = (id: string) => {
  const {
    data: personDetails,
    refetch: refetchPersonDetails,
    isFetching: isFetchingPersonDetails,
  } = useQuery('person details', () => getPersonDetails(id), {
    onError: (error: any) => {
      toast.error('Not found person');
    },
  });

  return { personDetails, refetchPersonDetails, isFetchingPersonDetails };
};
