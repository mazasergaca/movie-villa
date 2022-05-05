import { useQuery } from 'react-query';
import { getPersonImages } from '../services/movies-services';

export const usePersonImages = (id: string) => {
  const { data: personImages } = useQuery('person images', () =>
    getPersonImages(id)
  );

  return { personImages };
};
