"use client"

import { styled } from '@mui/material/styles';
import { Avatar } from './Avatar';
import { Tooltip } from '@mui/material';

export const StyledWrapper = styled('div')({
  margin: 'auto',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  cursor: 'pointer',
}));

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  '& .MuiTooltip-arrow': {
    color: theme.palette.secondary.main,
  }
}));
