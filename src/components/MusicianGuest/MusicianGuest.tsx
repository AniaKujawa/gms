import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Musician } from ".."

import { useStyles } from './MusicanGuest.styles';
import { Props } from './types';

export const MusicianGuest: FC<Props> = ({ musician }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Musician musician={musician}>
      <Box className={classes.box}>
        <Link
          to="/start"
        >
          {t('musician.loginToUnblockContactInfo')}
        </Link>
      </Box>
    </Musician>
  );
};
