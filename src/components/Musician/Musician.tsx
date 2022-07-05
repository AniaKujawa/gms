import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';
import parse from 'html-react-parser';

import { MusicianTags } from './../MusicianTags';
import { Props } from './types';
import { useStyles } from './Musician.styles';
import { MusicianImage } from '../MusicianImage';


export const Musician: FC<Props> = ({ musician, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">{musician.name}</Typography>
      <Grid
        item
        xs={3}
        className={classes.image}
      >
        <MusicianImage
          title={musician.name}
          imageUrl={musician.images[0]?.url}
        />
      </Grid>      
      <Grid item xs={4} className={classes.description}>
        <Typography variant="body1">
          {parse(musician.description || '')}
        </Typography>
      </Grid>
      <MusicianTags tags={musician.tags} />
      {children}
    </div>
  )
};
