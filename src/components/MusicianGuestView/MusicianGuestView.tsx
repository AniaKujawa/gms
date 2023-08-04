"use client"
import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Musician } from ".."
import { PATHS } from '../../utils/consts';

import { useStyles } from './MusicanGuestView.styles';
import { Props } from './types';

export const MusicianGuestView: FC<Props> = ({ musician }) => {
  const { t } = useTranslation('musician');
  const classes = useStyles();

  return (
    <Musician musician={musician}>
      <Box className={classes.box}>
        <Link
          href={PATHS.START}
        >
          {t('loginToUnblockContactInfo')}
        </Link>
      </Box>
    </Musician>
  );
};
