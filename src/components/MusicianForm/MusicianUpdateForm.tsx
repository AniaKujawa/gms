import React, { FC } from 'react';
import { useAddMusicianImages, useUpdateMusicianBand } from '../../queries/musician';

import { File } from './../MultipleUploader/types';
import { MusicianForm } from './MusicianForm';
import { Props } from './types';


export const MusicianUpdateForm: FC<Props> = ({ musician, endEditing }) => {
  const { mutateAsync } = useUpdateMusicianBand();
  const { mutateAsync: addImages } = useAddMusicianImages();
  const onSubmit = async(values: any) => {
    await mutateAsync({
      id: musician?.id,
      ...values
    });
    if(values.images) {
      await addImages({
        id: musician.id,
        images: [ ...values.images.map((file: File) => file.url) ],
      })
    }
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
