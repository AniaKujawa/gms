import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddMusicianImages, useUpdateMusicianBand } from '../../queries/musician';

import { ImageFile } from './../MultipleUploader/types';
import { MusicianForm } from './MusicianForm';
import { Props } from './types';


export const MusicianUpdateForm: FC<Props> = ({ musician }) => {
  const { mutateAsync } = useUpdateMusicianBand();
  const navigate = useNavigate();
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

    navigate(-1);
  };

  return (
    <MusicianForm
      musician={musician}
      onSubmit={onSubmit}
      handleCancel={() => navigate(-1)}
    />
  );
};
