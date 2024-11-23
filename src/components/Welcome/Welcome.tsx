
"use client"
import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslations } from 'next-intl';
import { StyledBox } from './Welcome.styles';
// import { SearchBand } from '../SearchBand';
// import { PopularTags } from '../PopularTags';


export const Welcome: FC = () => {
  const t = useTranslations();

  return (
    <StyledBox>
      <Typography variant="h1" color="secondary">
        {t('dashboard.title')}
      </Typography>
      {/* <SearchBand />
      <PopularTags /> */}
    </StyledBox>
  )
}