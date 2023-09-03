import React, { FC } from 'react';

import { MusicianToolbar, MusicianExtended } from '../../components'
import { Container } from '@material-ui/core';
import { Musician } from '../../types';

type Props = {
  musician: Musician;
};

export const BandProfile: FC<Props> = ({ musician }) => {
  return (
    <Container>
      {
        musician ? (
          <>
            <MusicianToolbar musician={musician} />
            <MusicianExtended musician={musician} />
          </>
        ) : (
          <h2>You profile couldn't be displayed. Contact our service.</h2>
        )
      }
    </Container>
  )
};
