"use client"

import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  minWidth: '100%',
  padding: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    minWidth: 600,
  },

  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.common.white,
  }
}));
