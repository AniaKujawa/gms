import React from 'react';
import { useGetTags } from '../../queries/musician';

import { PopularTag } from './PopularTag';
import { useStyles } from './PopularTags.styles';


export const PopularTags = () => {
  const { data } = useGetTags();
  const styles = useStyles();

  return (
    data ? (
      <ul className={styles.list}>
        {data.slice(0, 5).map(tag => (
          <PopularTag key={tag.id} tag={tag} />
        ))}
      </ul>
    ) : null
  )
}