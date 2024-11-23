"use client"

import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const StyledTooltip = styled(Tooltip)(({ theme }: { theme: Theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  '& .MuiTooltip-arrow': {
    color: theme.palette.secondary.main,
  }
}));
