"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledImage = styled('img')({
  maxWidth: 400,
  height: 'auto',
});

export const StyledButton = styled(Button)({
  alignSelf: 'flex-end',
});
