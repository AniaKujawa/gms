import React, { FC } from 'react';

import { MusicianUpdateForm } from '../../components'
import { Container } from '@material-ui/core';
import { Musician } from '../../types';

type Props = {
  musician: Musician;
};

export const BandUpdate: FC<Props> = ({ musician }) => {
  return (
    <Container>
      {musician ? (
        <MusicianUpdateForm musician={musician} />
      ) : (
        <h2>You profile couldn't be displayed. Contact our service.</h2>
      )}
    </Container>
  )
};
