import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { useStyles } from './Loader.styles';

export const Loader = () => {
  const { t } = useTranslation('translation');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.loader} src="/loader.jpg" alt="loader" />
      <Typography variant="h2">
        {t('loading')}
      </Typography>
    </div>
  )
}