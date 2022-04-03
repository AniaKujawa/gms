import React, { FC } from 'react';
import { useUpdateMusicianBand } from '../../queries/musician';

import { MusicianForm } from './MusicianForm';
import { Props } from './types';


export const MusicianUpdateForm: FC<Props> = ({ musician, endEditing }) => {
  const { mutateAsync } = useUpdateMusicianBand();
  const onSubmit = async(values: any) => {
    await mutateAsync({
      id: musician?.id,
      ...values
    });
    endEditing();
  };

  return (
    <MusicianForm
      musician={musician}
      onSubmit={onSubmit}
      handleCancel={endEditing}
    />
  );
};
