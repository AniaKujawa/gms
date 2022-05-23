import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { Props } from './types';
import { useStyles } from './ImagePreview.styles';


export const ImagePreview: FC<Props> = ({ image, handleDelete, handleServerDelete }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {image.saved ? (
        <Button
          className={classes.btn}
          onClick={() => handleServerDelete(image)}
          variant="contained"
        >
          <Clear />
        </Button>
      ) : (
        <Button
          className={classes.btn}
          onClick={() => handleDelete(image)}
          variant="outlined"
        >
          <Clear />
        </Button>
      )}
      <img className={classes.img} src={image.url} alt={`band-${image.id}`} />
    </Box>
  )
};
