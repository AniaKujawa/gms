import React, { ReactElement } from 'react';
import { Tooltip as MuiTooltip } from '@material-ui/core';

import { useStyles } from './Tooltip.styles';

type Props = {
  children: ReactElement;
  title: string;
};

export const Tooltip = ({ children, title }: Props) => {
  const classes = useStyles();

  return (
    <MuiTooltip arrow title={title} classes={classes}>
      {children}
    </MuiTooltip>
  );
};
