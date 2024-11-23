import React, { FC } from 'react';
import { ButtonProps } from '@mui/material';

import { StyledButton } from './Button.styles';

export const Button: FC<ButtonProps> = ({ children, color = 'primary', ...props }) => {
  return (
    <StyledButton
      variant='contained'
      color={color}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
