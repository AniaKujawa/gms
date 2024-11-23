import React, { FC } from 'react';
import { Typography, Container } from '@material-ui/core';
import { useTranslations } from 'next-intl';

import { MusicianCreateForm } from '../../components';


export const BandCreation: FC = () => {
  const t = useTranslations('musician');

  return (
    <Container>
      <Typography variant="h1">
        {t('createBandTitle')}
      </Typography>
      <MusicianCreateForm />
    </Container>
  );
};
