import React from 'react';
// import { useTranslations } from 'next-intl';
import { Typography } from '@material-ui/core';

import { StyledLoader, StyledRoot } from './Loader.styles';

export const Loader = () => {
  // const t = useTranslations('translation');

  return (
    <StyledRoot>
      <StyledLoader src="/loader.jpg" alt="loader" />
      <Typography variant="h2">
        {'loading'}
      </Typography>
    </StyledRoot>
  )
}