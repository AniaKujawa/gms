import React, { FC, useState } from 'react';
import { Grid } from '@material-ui/core';

import { MultipleUploader } from '../MultipleUploader';
import { useDeleteMusicianImage } from '../../queries/musician';
import { ImagePreview } from '../ImagePreview';

import { Props } from './types';
import { Image } from '../MultipleUploader/types';
import { DeletingModal } from './DeletingModal';


export const MusicianUploader: FC<Props> = ({ musician, values, setValues }) => {
  const { mutateAsync: mutateDeletion } = useDeleteMusicianImage();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ imageToDelete, setImageToDelete ] = useState<Image | null>(null);
  const handleClose = () => setIsModalOpen(false);

  const handleOpenDeletionModal = (image: Image) => {
    setIsModalOpen(true);
    setImageToDelete(image);
  };


  const handleImageDelete = async() => {
    if(musician && imageToDelete) {
      await mutateDeletion({ musicianId: musician.id, imageId: imageToDelete.id });

      setIsModalOpen(false);
      setImageToDelete(null);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      {musician?.images.map(img => (
        <Grid item key={img.id}>
          <ImagePreview
            image={img}
            handleDelete={handleOpenDeletionModal}
          />
        </Grid>
      ))}
      <MultipleUploader
        values={values}
        setValues={setValues}
      />
      <DeletingModal
         isModalOpen={isModalOpen}
         handleClose={handleClose} 
         handleDelete={handleImageDelete}
      />
    </Grid>
  );
};
