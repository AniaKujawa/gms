import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useGetMusician } from '../../queries/musician';


export const Profile: FC = () => {
  const { data: musician } = useGetMusician('');

  return (
    <Typography variant="h1">
      {musician?.name}
    </Typography>
  )
};
