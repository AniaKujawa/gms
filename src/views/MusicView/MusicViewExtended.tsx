import { Container } from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';

import { MusicianExtended } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';


export const MusicViewExtended = () => {
  const router = useRouter();
  const { data: musician, isLoading } = useGetMusician(router.query?.id?.toString() || '');

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
