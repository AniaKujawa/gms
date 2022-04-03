import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import { MusicianTags } from './../MusicianTags';
import { MusicianImage } from './../MusicianImage';
import { useStyles } from './../Musician/Musician.styles';
import { useGetMusicians } from '../../queries/musician';
import { PATHS } from '../../utils/consts';

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
          <Grid key={music.id} item lg={4} sm={6} xs={12}>
            <Card
              className={classes.card}
              onClick={() => history.push(`${PATHS.MUSIC}/${music.id}`)}
            >
              <Typography variant="h3">{music.name}</Typography>
                <Grid
                  className={classes.image}
                >
                  <MusicianImage
                    title={music.name}
                    imageUrl={music.imageUrl}
                  />
                </Grid>
              <MusicianTags tags={music.tags} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
};
