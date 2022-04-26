import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getPersonImages } from 'api/services/movies.services.ts';

export const usePersonImages = (id: string) => {
  const { data: personImages } = useQuery(
    'person images',
    () => getPersonImages(id),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { personImages };
};
