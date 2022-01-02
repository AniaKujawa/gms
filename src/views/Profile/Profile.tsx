import React, { FC, useState } from 'react';

import { useGetMusician } from '../../queries/musician';
import { Musician, MusicianToolbar, MusicianForm } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Container } from '@material-ui/core';


export const Profile: FC = () => {
  const { data: musician, isLoading } = useGetMusician('');
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {isEditing && musician ? (
          <MusicianForm musician={musician} />
        ) : (   
          musician ? (
            <>
              <MusicianToolbar setIsEditing={setIsEditing} />
              <Musician musician={musician} />
            </>
          ) : (
            <h2>You profile couldn't be displayed. Contact our service.</h2>
          )
        )}
      </Container>
    </LoadingLayout>
  )
};
