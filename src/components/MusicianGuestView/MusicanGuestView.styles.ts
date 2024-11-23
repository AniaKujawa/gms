"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  marginTop: theme.spacing(),
  // backgroundColor: theme.palette.red.light,
  maxWidth: 400,
  textAlign: 'center',

  '& a:hover': {
    textDecoration: 'underline',
  }
}));