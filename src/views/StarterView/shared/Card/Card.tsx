import React, { FC, PropsWithChildren } from 'react';

import { StyledCard } from './Card.styles';
import { CardProps } from './types';

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, title }) => {
  return (
    <StyledCard>
      <h1>{title}</h1>
      {children}
    </StyledCard>
  );
};
