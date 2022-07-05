import { Container } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';

import { MusicianGuestView } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';


export const MusicView = () => {
  const { params } = useRouteMatch<{ id: string }>();
  const { data: musician, isLoading } = useGetMusician(params.id);

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {musician ? (
          <MusicianGuestView musician={musician} />
        ) : (
          <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
        )}
      </Container>
    </LoadingLayout>
  );
};
