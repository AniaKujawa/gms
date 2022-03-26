import React, { FC } from 'react';
import { Chip } from '@material-ui/core';

import { Props } from './types';
import { useStyles } from './MusicianTags.styles';


export const MusicianTags: FC<Props> = ({ tags = [] }) => {
  const classes = useStyles();

  return (
    <>
      {tags.map(tag => (
        <Chip
          key={tag.id}
          label={tag.name}
          className={classes.tag}
        />
      ))}
    </>
  );
};
