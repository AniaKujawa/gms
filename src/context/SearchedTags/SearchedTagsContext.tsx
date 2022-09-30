import React, { FC, createContext, useContext } from 'react';

import { SearchedTagsContextProps } from './types';
import { useBandsTags } from '../../hooks/useBandsTags';
import { noop } from 'lodash';


const defaultContext: SearchedTagsContextProps = {
  tags: [],
  addTag: noop,
  removeTag: noop,
};

export const SearchedTagsContext = createContext<SearchedTagsContextProps>(defaultContext);

export const SearchedTagsContextProvider: FC = ({ children }) => {
  const { tags, addTag, removeTag } = useBandsTags();

  return (
    <SearchedTagsContext.Provider
      value={{
        tags,
        addTag,
        removeTag,
      }}
    >
      {children}
    </SearchedTagsContext.Provider>
  );
};

export const useSearchedTagsContext = () => {
  const context = useContext(SearchedTagsContext);

  if (context === undefined) {
    throw new Error('useSearchedTagsContext must be used within a SearchedTagsProvider');
  }

  return context;
};
