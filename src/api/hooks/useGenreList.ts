import { useQuery } from 'react-query';
import { getGenreList } from 'api/services/movies.services.ts';

export const useGenreList = () => {
  const { data: genreList, refetch: refetchGenreList } = useQuery(
    'genre list',
    () => getGenreList()
  );

  return { genreList, refetchGenreList };
};
