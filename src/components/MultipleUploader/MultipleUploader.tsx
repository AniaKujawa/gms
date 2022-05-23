import React, { FC, useState } from 'react';
import { Box, Grid } from '@material-ui/core';

import { UploaderButton } from './../Uploader';
import { ImagePreview } from './../ImagePreview';
import { Props, Image } from './types';

export const MultipleUploader: FC<Props> = ({ values, setValues, handleServerDelete }) => {
  const [ imagesUrl, setImagesUrl ] = useState(values);

  const handleFileChange = (file: File) => {
    if(file) {
      setValues([...values, { url: file, id: file.name }]);
      setImagesUrl([...imagesUrl, { url: URL.createObjectURL(file), id: file.name }]);
    }
  };

  const handleDelete = (item: Image) => {
    const files = values.filter(file => file.id !== item.id);
    const images = imagesUrl.filter(img => img.id !== item.id);

    setValues(files);
    setImagesUrl(images);
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        {imagesUrl.map(img => (
          <Grid item key={img.id}>
            <ImagePreview
              image={img}
              handleDelete={handleDelete}
              handleServerDelete={handleServerDelete}
            />
          </Grid>
        ))}
      </Grid>
      <UploaderButton onChange={handleFileChange} />
    </Box>
  );
};
