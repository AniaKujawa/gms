
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Welcome.styles';


export const Welcome = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" color="secondary">
        {t('dashboard.title')}
      </Typography>
    </Box>
  )
}