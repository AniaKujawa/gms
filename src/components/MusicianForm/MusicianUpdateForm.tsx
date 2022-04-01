import React, { FC } from 'react';
import { useUserContext } from '../../context/User';
import { useUpdateMusicianBand } from '../../queries/musician';

import { MusicianForm } from './MusicianForm';
import { Props } from './types';


export const MusicianUpdateForm: FC<Props> = ({ musician, handleCancel }) => {
  const { user } = useUserContext();
  const { mutate } = useUpdateMusicianBand(user?.id);
  const onSubmit = (values: any) => {
    mutate({
      id: musician?.id,
      ...values
    });
  };

  return (
    <MusicianForm
      musician={musician}
      onSubmit={onSubmit}
      handleCancel={handleCancel}
    />
  );
};
