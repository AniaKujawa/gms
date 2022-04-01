import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetMusician } from '../../queries/musician';
import { MusicianToolbar, MusicianUpdateForm, MusicianExtended } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';
import { Container } from '@material-ui/core';

import { Params } from './types';


export const BandProfile: FC = () => {
  const { id } = useParams<Params>();
  const { data: musician, isLoading } = useGetMusician(id);
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {isEditing && musician ? (
          <MusicianUpdateForm musician={musician} handleCancel={() => setIsEditing(false)} />
        ) : (   
          musician ? (
            <>
              <MusicianToolbar setIsEditing={setIsEditing} />
              <MusicianExtended musician={musician} />
            </>
          ) : (
            <h2>You profile couldn't be displayed. Contact our service.</h2>
          )
        )}
      </Container>
    </LoadingLayout>
  )
};
