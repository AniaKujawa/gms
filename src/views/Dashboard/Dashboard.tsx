import React, { FC } from 'react';
import { MusiciansList } from './../../components';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';


export const Dashboard: FC = () => {
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
