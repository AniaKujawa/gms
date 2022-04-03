import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateMusicianBand } from '../../queries/musician';

import { MusicianForm } from './MusicianForm';


export const MusicianCreateForm: FC = () => {
  const { goBack } = useHistory();
  const { mutate } = useCreateMusicianBand();
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
