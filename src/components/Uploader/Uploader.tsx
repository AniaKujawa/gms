import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';

import { ImagePreview } from './../ImagePreview';
import { UploaderButton } from './UploaderButton';
import { Image } from '../MultipleUploader/types';
import { useDeleteMusicianImage } from '../../queries/musician';


type Props = {
  filename: string;
  fileUrl: string;
  setFile: (file: Blob) => void;
};

export const Uploader: FC<Props> = ({ filename, setFile, fileUrl }) => {
  const [ imageUrl, setImageUrl ] = useState(fileUrl || '');
  const { mutate: mutateDeletion } = useDeleteMusicianImage();

  const handleFileChange = (file: Blob) => {
    if(file) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleDelete = (image: Image) => {
    setImageUrl('');
  };

  const handleServerDelete = (item: Image) => {
    mutateDeletion({ musicianId: '4', imageId: item.id });
  };

  return (
    <Box>
      {imageUrl && (
      <ImagePreview
        image={{ url: fileUrl, id: filename}}
        handleDelete={handleDelete}
        handleServerDelete={handleServerDelete}
      />
      )}
      <UploaderButton onChange={handleFileChange} />
    </Box>
  )
};
