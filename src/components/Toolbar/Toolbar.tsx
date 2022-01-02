import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './Toolbar.styles';


export const Toolbar: FC = ({ children }) => {
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
