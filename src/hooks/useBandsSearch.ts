import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { debounce, DebouncedFunc } from 'lodash';

interface HookApi {
  value: string | string[];
  setSearchValue: (search: string) => void;
  delayedSearch: DebouncedFunc<(search: string) => Promise<boolean> | undefined>;
}

export const useBandsSearch = (): HookApi => {
  const { push, pathname, query } = useRouter();
  const [ value, setSearchValue ] = useState(query.search || '');

  const handleSearchChange = useCallback((search: string) => {
    if(search) {
      return push(`${pathname}?search=${search}`);
    }
    push(pathname);
  }, [pathname, push]);

  const delayedSearch = useCallback(
    debounce(handleSearchChange, 500),
    []
  );

  useEffect(() => {
    setSearchValue(query.search || '');
  }, [query]);

  return {
    value,
    setSearchValue,
    delayedSearch
  }
};
