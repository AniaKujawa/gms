import React from 'react';
import { useRouteMatch } from 'react-router';

import { Musician } from '../../components'

export const MusicView = () => {
  const { params } = useRouteMatch<{ id: string }>();

  return (
    <Musician id={params.id} />
  );
};
