"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledForm = styled('form')(({ theme }) => ({
  margin: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const SubmitButton = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));