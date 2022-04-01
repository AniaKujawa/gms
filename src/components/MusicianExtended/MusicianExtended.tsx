import { Typography, Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Musician } from '..';

import { useStyles } from './MusicianExtended.styles';
import { Props } from './types';

export const MusicianExtended: FC<Props> = ({ musician }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Musician musician={musician}>
      <Box className={classes.box}>
      {musician.phoneNumber && (
        <Typography>
            {t('musician.phoneNumber')}: {musician.contactName} - {musician.phoneNumber}
          </Typography>
      )}
      {musician.socialLinks && (
        <Typography>
        {t('musician.socialLinks')}: {musician.socialLinks}
      </Typography>
      )}
      </Box>
    </Musician>
  )
}