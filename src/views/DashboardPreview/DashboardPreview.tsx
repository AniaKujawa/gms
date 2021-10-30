import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MusiciansList } from '../../components';


export const DashboardPreview: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1">
        {t('dashboard.title')}
      </Typography>
      <MusiciansList />
    </>
  )
};
