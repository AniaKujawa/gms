import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Typography, Grid } from '@material-ui/core';

import { useGetMusicians } from '../../queries/musician';
import { MusicianCard } from './MusicianCard';
import { useBandsQuery } from '../../hooks/useBandsQuery';


export const MusiciansList: FC = () => {
  const { query } = useBandsQuery();
  const { data: musicians } = useGetMusicians(query);
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2">{t('dashboard.subtitle')}</Typography>
      <Grid container>
        {musicians && musicians.map(music => (
          <Grid item key={music.id} lg={4} sm={6} xs={12}>
            <MusicianCard musician={music} />
          </Grid>
        ))}
      </Grid>
    </>
  )
};
