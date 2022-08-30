import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useAddMusicianImages, useUpdateMusicianBand } from '../../queries/musician';

import { ImageFile } from './../MultipleUploader/types';
import { MusicianForm } from './MusicianForm';
import { Props } from './types';


export const MusicianUpdateForm: FC<Props> = ({ musician }) => {
  const { mutateAsync } = useUpdateMusicianBand();
  const { goBack } = useHistory();
  const { mutateAsync: addImages } = useAddMusicianImages();

  const onSubmit = async(values: any) => {
    await mutateAsync({
      id: musician?.id,
      ...values
    });
    if(values.images.length) {
      await addImages({
        id: musician.id,
        images: [ ...values.images.map((file: ImageFile) => file.url) ],
      })
    }

    goBack();
  };

  return (
    <MusicianForm
      musician={musician}
      onSubmit={onSubmit}
      handleCancel={goBack}
    />
  );
};
