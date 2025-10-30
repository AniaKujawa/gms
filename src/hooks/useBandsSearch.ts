import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUrlQuery } from './useUrlQuery';

interface HookApi {
  search: string;
  handleSearchChange: (search: string) => void;
}

export const useBandsSearch = (): HookApi => {
  const query = useUrlQuery();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [ search, setSearch ] = useState(query.get('search') || '');

  const handleSearchChange = useCallback((search: string) => {
    if(search) {
      return navigate(`${pathname}?search=${search}`);
    }
    navigate(pathname);
  }, [pathname, navigate]);

  useEffect(() => {
    setSearch(query.get('search') || '');
  }, [query]);

  return {
    search,
    handleSearchChange
  }
};
