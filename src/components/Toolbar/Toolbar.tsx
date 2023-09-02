import React, { FC, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './Toolbar.styles';

type Props = {
  children: ReactNode;
}

export const Toolbar: FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="flex-end"
      className={classes.root}
    >
      {children}
    </Grid>
  )
};
