import React, { FC } from 'react';
import { Typography, Container } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import { MusicianCreateForm } from '../../components';


export const BandCreation: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h1">
        {t('musician.createBandTitle')}
      </Typography>
      <MusicianCreateForm />
    </Container>
  );
};
