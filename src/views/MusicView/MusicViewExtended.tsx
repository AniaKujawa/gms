import { Container } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';

import { MusicianExtended } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';

import { musician } from '../../mocks/musician';


export const MusicViewExtended = () => {
  const { params } = useRouteMatch<{ id: string }>();
  // const { data: musician, isLoading } = useGetMusician(params.id);

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
