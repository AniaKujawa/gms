import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/User';
import { useCreateMusicianBand } from '../../queries/musician';

import { MusicianForm } from './MusicianForm';


export const MusicianCreateForm: FC = () => {
  const { goBack } = useHistory();
  const { user } = useUserContext();
  const { mutate } = useCreateMusicianBand(user?.id);
  const onSubmit = (values: any) => {
    mutate(values);
  };

  return (
    <MusicianForm
      onSubmit={onSubmit}
      handleCancel={goBack}
    />
  );
};
