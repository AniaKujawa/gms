import React, { ReactElement } from 'react';

import { StyledTooltip } from './Tooltip.styles';

type Props = {
  children: ReactElement;
  title: string;
};

export const Tooltip = ({ children, title }: Props) => {
  return (
    <StyledTooltip arrow title={title}>
      {children}
    </StyledTooltip>
  );
};
