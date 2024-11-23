"use client"
import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Musician } from ".."
import { PATHS } from '../../utils/consts';

import { StyledBox } from './MusicanGuestView.styles';
import { Props } from './types';

export const MusicianGuestView: FC<Props> = ({ musician }) => {
  const t = useTranslations('musician');

  return (
    <Musician musician={musician}>
      <StyledBox>
        <Link
          href={PATHS.START}
        >
          {t('loginToUnblockContactInfo')}
        </Link>
      </StyledBox>
    </Musician>
  );
};
