import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';

import { ImagePreview } from './../ImagePreview';
import { UploaderButton } from './UploaderButton';

type Props = {
  filename: string;
  fileUrl: string;
  setFile: (file: Blob) => void;
};

export const Uploader: FC<Props> = ({ filename, setFile, fileUrl }) => {
  const [ imageUrl, setImageUrl ] = useState(fileUrl || '');
  const handleFileChange = (file: Blob) => {
    if(file) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <Box>
      {imageUrl && <ImagePreview imageUrl={imageUrl} imageName={filename} />}
      <UploaderButton onChange={handleFileChange} />
    </Box>
  )
};
