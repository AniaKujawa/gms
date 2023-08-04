"use client"
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@material-ui/core';

import { Tag } from '../../types';

import { useStyles } from './PopularTag.styles';
import { useSearchedTagsContext } from '../../context/SearchedTags';


interface PopularTag {
  tag: Tag;
}

export const PopularTag: FC<PopularTag> = ({ tag }) => {
  const { addTag, removeTag } = useSearchedTagsContext();
  const [isSelected, setIsSelected] = useState(false);
  const styles = useStyles({ selected: isSelected });

  const toggleSelected = useCallback(() => {
    setIsSelected(selected => !selected);

    if (isSelected) {
      return removeTag(tag)
    }
    addTag(tag);
  }, [isSelected, addTag, removeTag, tag]);


  return (
    <li className={styles.element}>
      <Button
        onClick={toggleSelected}
        variant="contained"
        color={isSelected ? 'primary' : 'secondary'}
      >
        #{tag.name}
      </Button>
    </li>
  )
}