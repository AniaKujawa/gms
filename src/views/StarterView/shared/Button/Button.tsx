import React, { FC } from 'react';
import { Button as MButton, ButtonProps } from '@material-ui/core';

import { useStyles } from './Button.styles';

export const Button: FC<ButtonProps> = ({ children, color = 'primary', ...props }) => {
  const classes = useStyles();

  return (
    <MButton
      variant='contained'
      color={color}
      className={classes.root}
      {...props}
    >
      {children}
    </MButton>
  );
};
