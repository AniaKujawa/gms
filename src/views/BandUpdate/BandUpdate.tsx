import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetMusician } from '../../queries/musician';
import { MusicianUpdateForm } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Container } from '@material-ui/core';

import { Params } from './types';


export const BandUpdate: FC = () => {
  const { id } = useParams<Params>();
  const { data: musician, isLoading } = useGetMusician(id);

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
