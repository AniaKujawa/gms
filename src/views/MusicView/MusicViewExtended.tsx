"use client"
import { Container } from '@material-ui/core';
import React from 'react';


import { MusicianExtended } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Musician } from '../../types';

type Props = {
  musician: Musician;
}


export const MusicViewExtended = ({ musician }: Props) => {
  return (
    <Container>
      {musician ? (
        <MusicianExtended musician={musician} />
      ) : (
        <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
      )}
    </Container>
  );
};
