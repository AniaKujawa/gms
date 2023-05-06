import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { useGetMusician } from '../../queries/musician';
import { MusicianUpdateForm } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Container } from '@material-ui/core';


export const BandUpdate: FC = () => {
  const router = useRouter();
  const { data: musician, isLoading } = useGetMusician(router.query?.id?.toString() || '');

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {musician ? (
          <MusicianUpdateForm musician={musician} />
        ) : (
          <h2>You profile couldn't be displayed. Contact our service.</h2>
        )}
      </Container>
    </LoadingLayout>
  )
};
