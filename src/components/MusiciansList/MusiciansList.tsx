import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardMedia, Typography, Chip, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import { useStyles } from './../Musician/Musician.styles';
import { useGetMusicians } from '../../queries/musician';

export const MusiciansList = () => {
  const { data: musicians } = useGetMusicians();
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2">{t('dashboard.subtitle')}</Typography>
      <Grid container>
        {musicians && musicians.map(music => (
          <Grid item lg={4} sm={6} xs={12}>
            <Card
              key={music.id}
              className={classes.card}
              onClick={() => history.push(`/muzyk/${music.id}`)}
            >
              <Typography variant="h3">{music.name}</Typography>
              {music.imageUrl && (
                <Grid
                  className={classes.image}
                >
                  <CardMedia
                    component="img"
                    height="200"
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
          </Grid>
        ))}
      </Grid>
    </>
  )
};
