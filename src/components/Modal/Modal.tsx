import React, { FC } from 'react';
import { Modal as MUIModal, Box, Typography } from '@material-ui/core';

import { StyledBox } from './Modal.styles';
import { Props } from './types';

export const Modal: FC<Props> = ({ open, handleClose, title, description, children }) => {

  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {description && (
          <Typography id="modal-modal-description">
            {description}
          </Typography>
        )}
        {children}
      </StyledBox>
    </MUIModal>
  );
};
