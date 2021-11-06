import React, { FC } from 'react';
import { MusiciansList } from './../../components';
import { Container  } from '@material-ui/core';

import { Welcome } from './../../components';


export const Dashboard: FC = () => {
  return (
    <>
      <Welcome />
      <Container>
        <MusiciansList />
      </Container>
    </>
  )
};
