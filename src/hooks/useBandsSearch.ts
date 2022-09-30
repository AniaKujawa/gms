import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUrlQuery } from './useUrlQuery';

interface HookApi {
  search: string;
  handleSearchChange: (search: string) => void;
}

export const useBandsSearch = (): HookApi => {
  const query = useUrlQuery();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [ search, setSearch ] = useState(query.get('search') || '');

  const handleSearchChange = useCallback((search: string) => {
    if(search) {
      return push(`${pathname}?search=${search}`);
    }
    push(pathname);
  }, [pathname, push]);

  useEffect(() => {
    setSearch(query.get('search') || '');
  }, [query]);

  return {
    search,
    handleSearchChange
  }
};
