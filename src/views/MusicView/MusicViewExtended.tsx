import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import { MusicianExtended } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';


export const MusicViewExtended = () => {
  const { id } = useParams<{ id: string }>();
  const { data: musician, isLoading } = useGetMusician(id!);

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {musician ? (
          <MusicianExtended musician={musician} />
        ) : (
          <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
        )}
      </Container>
    </LoadingLayout>
  );
};
