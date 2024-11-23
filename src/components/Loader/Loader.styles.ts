"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4, 0),
  justifyContent: 'center',
  height: 'calc(100vh - 60px)',
}));

export const StyledLoader = styled('img')(({ theme }) => ({
  animation: 'spin 2s linear infinite',
  width: 100,
  marginBottom: theme.spacing(5),

  [theme.breakpoints.up('md')]: {
    width: 200,
  },

  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }
}));
