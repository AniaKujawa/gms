import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Grid } from '@material-ui/core';

import { useGetMusicians } from '../../queries/musician';
import { MusicianCard } from './MusicianCard';

export const MusiciansList = () => {
  const { data: musicians } = useGetMusicians();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2">{t('dashboard.subtitle')}</Typography>
      <Grid container>
        {musicians && musicians.map(music => (
          <Grid key={music.id} item lg={4} sm={6} xs={12}>
            <MusicianCard musician={music} />
          </Grid>
        ))}
      </Grid>
    </>
  )
};
