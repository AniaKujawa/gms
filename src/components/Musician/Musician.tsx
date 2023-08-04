"use client"
import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';
import parse from 'html-react-parser';

import { Slider } from '../Slider';
import { MusicianTags } from './../MusicianTags';

import { Props } from './types';
import { useStyles } from './Musician.styles';


export const Musician: FC<Props> = ({ musician, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">{musician.name}</Typography>
      {musician.images.length ? (
        <Grid md={6} container className={classes.slider}>
          <Slider images={musician.images} />
        </Grid>
      )
        : null}
      <Grid item md={6} lg={4} className={classes.description}>
        <Typography variant="body1">
          {parse(musician.description || '')}
        </Typography>
      </Grid>
      <MusicianTags tags={musician.tags} />
      {children}
    </div>
  )
};
