import React, { FC, useState } from 'react';

import { useGetMusician } from '../../queries/musician';
import { Musician, MusicianToolbar, MusicianForm } from '../../components'
import { LoadingLayout } from '../../layout/LoadingLayout';


export const Profile: FC = () => {
  const { data: musician, isLoading } = useGetMusician('');
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <LoadingLayout isLoading={isLoading}>
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
    </LoadingLayout>
  )
};
