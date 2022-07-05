import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { UploaderButton } from './../Uploader';
import { ImagePreview } from './../ImagePreview';
import { Props, Image } from './types';

export const MultipleUploader: FC<Props> = ({ values, setValues }) => {

  const handleFileChange = (file: File) => {
    if(file) {
      setValues([...values, { url: file, id: file.name }]);
    }
  };

  const handleDelete = (item: Image) => {
    const files = values.filter(file => file.id !== item.id);

    setValues(files);
  };

  const images = values.map(img => ({
    ...img,
    url: URL.createObjectURL(img.url)
  }))

  return (
    <>
      {images.map(img => (
        <Grid item key={img.id}>
          <ImagePreview
            image={img}
            handleDelete={handleDelete}
          />
        </Grid>
      ))}
      <UploaderButton onChange={handleFileChange} />
    </>
  );
};
