import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { CardMedia, Typography, Chip, Grid } from '@material-ui/core';

import { musicianClient } from './../../client/Musician';
import { GlobalLoader } from '../../views/GlobalLoader';

import { Props } from './types';
import { useStyles } from './Mucisian.styles';


export const Musician: FC<Props> = ({ id }) => {
  const { data: musician, status } = useQuery(['musician', id], () => musicianClient.getMusician(id));
  const classes = useStyles();


  return (
    status === 'loading' ? (
      <GlobalLoader />) : (
      musician ? (
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
            {musician.description}
          </Grid>
          {musician.tags.map(tag => (
            <Chip
              label={tag}
              className={classes.tag}
            />
          ))}
        </div>
      ) : <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
    )
  )
};
