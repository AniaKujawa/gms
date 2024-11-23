import React from 'react';
import { useGetTags } from '../../queries/musician';

import { PopularTag } from './PopularTag';
import { StyledList } from './PopularTags.styles';


export const PopularTags = () => {
  const { data } = useGetTags();

  return (
    data ? (
      <StyledList>
        {data.slice(0, 5).map(tag => (
          <PopularTag key={tag.id} tag={tag} />
        ))}
      </StyledList>
    ) : null
  )
}