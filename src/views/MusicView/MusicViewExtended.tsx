"use client"
import { Container } from '@material-ui/core';
import React from 'react';


import { MusicianExtended } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';

type Props = {
  musician: Musician;
}


export const MusicViewExtended = ({ musician }: Props) => {
  return (
    // <LoadingLayout isLoading={isLoading}>
    <Container>
      {musician ? (
        <MusicianExtended musician={musician} />
      ) : (
        <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
      )}
    </Container>
    // </LoadingLayout>
  );
};
