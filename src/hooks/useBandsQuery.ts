import { useMemo } from 'react';
import { useSearchedTagsContext } from '../context/SearchedTags';
import { useBandsSearch } from './useBandsSearch';

export const useBandsQuery = () => {
  const { search } = useBandsSearch();
  const { tags } = useSearchedTagsContext();

  const query = useMemo(() => {
    const queryArr = tags.map(tag => tag.name);
    queryArr.push(search);

    return queryArr.join(' ');
  }, [search, tags]);

  return {
    query,
  };
}