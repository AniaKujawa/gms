import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

import { MusiciansList } from '../../components';


export const DashboardPreview: FC = () => {
  return (
    <>
      <Typography variant="h1">Welcome in GMS!</Typography>
      <MusiciansList />
    </>
  )
};
