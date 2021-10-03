import React from 'react';
import { useQuery } from 'react-query';
import { Card, CardMedia, Typography, Chip, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import { musicianClient } from './../../client/Musician';

import { useStyles } from './../Musician/Mucisian.styles';

export const MusiciansList = () => {
  const { data: musicians } = useQuery('musicians', musicianClient.getMusicians);
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2">Poznaj naszych wykonawców</Typography>
      {musicians && musicians.map(music => (
        <Card
          key={music.id}
          className={classes.card}
          onClick={() => history.push(`/muzyk/${music.id}`)}
        >
          <Typography variant="h3">{music.name}</Typography>
          {music.imageUrl && (
            <Grid
              xs={3}
              className={classes.image}
            >
              <CardMedia
                width='400px'
                component="img"
                alt={music.name}
                image={music.imageUrl}
              />
            </Grid>
          )}
          {music.tags.map(tag => (
            <Chip
              label={tag}
              className={classes.tag}
            />
          ))}
        </Card>
      ))}
    </>
  )
};
