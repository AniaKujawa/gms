import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';

import { MusicianTags } from '../MusicianTags';
import { Props } from './types';
import { useStyles } from './Musician.styles';
import { MusicianImage } from '../MusicianImage';


export const MusicianMinimumInfo: FC<Props> = ({ musician, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">{musician.name}</Typography>
      <Grid
        item
        md={6}
        lg={4}
        className={classes.image}
      >
        <MusicianImage
          title={musician.name}
          imageUrl={musician.images[0]?.url}
        />
      </Grid>
      <MusicianTags tags={musician.tags} />
      {children}
    </div>
  )
};
