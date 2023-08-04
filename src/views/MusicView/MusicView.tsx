"use client"
import { Container } from '@material-ui/core';
import React from 'react';

import { MusicianGuestView } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';
import { Musician } from '../../types';

type Props = {
  musician: Musician;
}

export const MusicView = ({ musician }: Props) => {
  return (
    // <LoadingLayout isLoading={isLoading}>
    <Container>
      {musician ? (
        <MusicianGuestView musician={musician} />
      ) : (
        <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
      )}
    </Container>
    // </LoadingLayout>
  );
};
