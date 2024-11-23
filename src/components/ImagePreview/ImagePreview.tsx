import React, { FC } from 'react';
import { Clear } from '@material-ui/icons';

import { Props } from './types';
import { StyledBox, StyledButton, StyledImage } from './ImagePreview.styles';


export const ImagePreview: FC<Props> = ({ image, handleDelete }) => {

  return (
    <StyledBox>
      <StyledButton
        onClick={() => handleDelete(image)}
        variant="outlined"
      >
        <Clear />
      </StyledButton>
      <StyledImage src={image.url} alt={`band-${image.id}`} />
    </StyledBox>
  )
};
