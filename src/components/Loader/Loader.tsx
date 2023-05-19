import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import loaderImg from './../../assets/loader.jpg';

import { useStyles } from './Loader.styles';

export const Loader = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.loader} src={loaderImg} alt="loader" />
      <Typography variant="h2">
        {t('translation.loading')}
      </Typography>
    </div>
  )
}