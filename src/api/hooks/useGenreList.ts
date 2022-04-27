import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getGenreList } from 'api/services/movies.services.ts';

export const useGenreList = () => {
  const { data: genreList, refetch: refetchGenreList } = useQuery(
    'genre list',
    () => getGenreList(),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  return { genreList, refetchGenreList };
};
