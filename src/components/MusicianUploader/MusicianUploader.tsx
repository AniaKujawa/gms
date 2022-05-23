import React, { FC, useState } from 'react';
import { MultipleUploader } from '../MultipleUploader';
import { useDeleteMusicianImage } from '../../queries/musician';

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
    <>
      <MultipleUploader
        values={values}
        setValues={setValues}
        handleServerDelete={handleOpenDeletionModal}
      />
      <DeletingModal
         isModalOpen={isModalOpen}
         handleClose={handleClose} 
         handleDelete={handleImageDelete}
      />
    </>
  )
}