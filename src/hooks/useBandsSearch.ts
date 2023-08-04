"use client"
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { debounce, DebouncedFunc, isArray } from 'lodash';

interface HookApi {
  value: string;
  setSearchValue: (search: string) => void;
  delayedSearch: DebouncedFunc<(search: string) => Promise<boolean> | undefined>;
}

const getQueryString = (query: string[] | string | undefined) => {
  if (!query) return '';
  return isArray(query) ? query[0] : query;
}

export const useBandsSearch = (): HookApi => {
  const { push, pathname, query } = useRouter();
  const [value, setSearchValue] = useState(getQueryString(query.search));

  const handleSearchChange = useCallback((search: string) => {
    if (search) {
      return push(`${pathname}?search=${search}`);
    }
    push(pathname);
  }, [pathname, push]);

  const delayedSearch = useCallback(
    debounce(handleSearchChange, 500),
    []
  );

  useEffect(() => {
    setSearchValue(getQueryString(query.search));
  }, [query]);

  return {
    value,
    setSearchValue,
    delayedSearch
  }
};
