import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { useGetMusician } from '../../queries/musician';
import { MusicianToolbar, MusicianExtended } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Container } from '@material-ui/core';
import { Musician } from '../../types';

type Props = {
  musician: Musician;
};

export const BandProfile: FC<Props> = ({ musician }) => {
  const router = useRouter();
  // const { id } = router.query;
  // const { data: musician, isLoading } = useGetMusician(id?.toString() || '');

  return (
    // <LoadingLayout isLoading={isLoading}>
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
    // </LoadingLayout>
  )
};
