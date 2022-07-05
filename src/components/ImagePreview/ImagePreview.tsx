import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { Props } from './types';
import { useStyles } from './ImagePreview.styles';


export const ImagePreview: FC<Props> = ({ image, handleDelete }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Button
        className={classes.btn}
        onClick={() => handleDelete(image)}
        variant="outlined"
      >
        <Clear />
      </Button>
      <img className={classes.img} src={image.url} alt={`band-${image.id}`} />
    </Box>
  )
};
