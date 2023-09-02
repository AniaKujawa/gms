import React, { FC } from 'react';
import { Typography, Container } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import { MusicianCreateForm } from '../../components';


export const BandCreation: FC = () => {
  const { t } = useTranslation('musician');

  return (
    <Container>
      <Typography variant="h1">
        {t('createBandTitle')}
      </Typography>
      <MusicianCreateForm />
    </Container>
  );
};
