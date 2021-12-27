import React, { FC } from 'react';
import { CardMedia, Typography, Chip, Grid } from '@material-ui/core';

import { Props } from './types';
import { useStyles } from './Musician.styles';


export const Musician: FC<Props> = ({ musician }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Typography variant="h2">{musician.name}</Typography>
      {musician.imageUrl && (
        <Grid
          xs={3}
          className={classes.image}
        >
          <CardMedia
            width='400px'
            component="img"
            alt={musician.name}
            image={musician.imageUrl}
          />
        </Grid>
      )}        
      <Grid xs={4} className={classes.description}>
        <Typography variant="body1">
          {musician.description}
        </Typography>
      </Grid>
      {musician.tags.map(tag => (
        <Chip
          label={tag}
          className={classes.tag}
        />
      ))}
    </div>
  )
};
