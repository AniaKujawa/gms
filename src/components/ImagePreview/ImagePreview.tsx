import React, { FC } from 'react';
import { Box } from '@material-ui/core';

import { Props } from './types';
import { useStyles } from './ImagePreview.styles';


export const ImagePreview: FC<Props> = ({ imageUrl, imageName }) => {
  const classes = useStyles();

  return (
    <Box>
      <img className={classes.root} src={imageUrl} alt={imageName} />
    </Box>
  )
};
