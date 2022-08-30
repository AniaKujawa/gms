import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateMusicianBand, useAddMusicianImages } from '../../queries/musician';
import { PATHS } from '../../utils/consts';
import { ImageFile } from './../MultipleUploader/types';


import { MusicianForm } from './MusicianForm';


export const MusicianCreateForm: FC = () => {
  const { goBack, push } = useHistory();
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

    push(`${PATHS.BANDS}/${musician?.id}`);
  };

  return (
    <MusicianForm
      onSubmit={onSubmit}
      handleCancel={goBack}
    />
  );
};
