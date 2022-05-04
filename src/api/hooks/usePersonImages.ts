import { useQuery } from 'react-query';
import { getPersonImages } from 'api/services/movies.services.ts';

export const usePersonImages = (id: string) => {
  const { data: personImages } = useQuery('person images', () =>
    getPersonImages(id)
  );

  return { personImages };
};
