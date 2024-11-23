import React, { FC, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

import { StyledGrid} from './Toolbar.styles';

type Props = {
  children: ReactNode;
}

export const Toolbar: FC<Props> = ({ children }) => {

  return (
    <StyledGrid
      container
      justifyContent="flex-end"
    >
      {children}
    </StyledGrid>
  )
};
