
import React, { FC } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import { useStyles } from './Welcome.styles';
import { SearchBand } from '../SearchBand';
import { PopularTags } from '../PopularTags';


export const Welcome: FC = () => {
  const { t } = useTranslation('dashboard');
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" color="secondary">
        {t('title')}
      </Typography>
      <SearchBand />
      <PopularTags />
    </Box>
  )
}