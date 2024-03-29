import { Typography, Box } from '@material-ui/core';
import { isEmpty } from 'lodash';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Musician } from '..';
import { SocialLinks } from '../SocialLinks';

import { useStyles } from './MusicianExtended.styles';
import { Props } from './types';

export const MusicianExtended: FC<Props> = ({ musician }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Musician musician={musician}>
      <Box className={classes.box}>
        {musician.phoneNumber && (
          <Typography data-testid="contact">
            {t('musician.phoneNumber')}: {musician.contactName} - {musician.phoneNumber}
          </Typography>
        )}
        {!isEmpty(musician.socialLinks) && (
          <SocialLinks socials={musician.socialLinks} />
        )}
      </Box>
    </Musician>
  )
}