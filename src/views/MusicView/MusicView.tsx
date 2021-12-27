import React from 'react';
import { useRouteMatch } from 'react-router';

import { Musician } from '../../components';
import { LoadingLayout } from '../../layout/LoadingLayout';
import { useGetMusician } from '../../queries/musician';


export const MusicView = () => {
  const { params } = useRouteMatch<{ id: string }>();
  const { data: musician, isLoading } = useGetMusician(params.id);

  return (
    <LoadingLayout isLoading={isLoading}>
      {musician ? (
        <Musician musician={musician} />
      ) : (
        <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
      )}
    </LoadingLayout>
  );
};
