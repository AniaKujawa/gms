
import React, { FC } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Welcome.styles';
import { Props } from './types';
import { SearchBand } from '../SearchBand';


export const Welcome: FC<Props> = ({ setSearchValue }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" color="secondary">
        {t('dashboard.title')}
      </Typography>
      <SearchBand setSearchValue={setSearchValue} />
    </Box>
  )
}