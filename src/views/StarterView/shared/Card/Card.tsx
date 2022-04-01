import React, { FC } from 'react';
import { Card as MCard } from '@material-ui/core';

import { useStyles } from './Card.styles';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <MCard className={classes.card}>
      <h1>{title}</h1>
      {children}
    </MCard>
  );
};
