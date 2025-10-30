import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateMusicianBand, useAddMusicianImages } from '../../queries/musician';
import { PATHS } from '../../utils/consts';
import { ImageFile } from './../MultipleUploader/types';


import { MusicianForm } from './MusicianForm';


export const MusicianCreateForm: FC = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateMusicianBand();
  const { mutateAsync: addImages } = useAddMusicianImages();

  const onSubmit = async(values: any) => {
    const musician = await mutateAsync(values);

    if(values.images.length && musician) {
      await addImages({
        id: musician.id,
        images: [ ...values.images.map((file: ImageFile) => file.url) ],
      })
    }

    navigate(`${PATHS.BANDS}/${musician?.id}`);
  };

  return (
    <MusicianForm
      onSubmit={onSubmit}
      handleCancel={() => navigate(-1)}
    />
  );
};
