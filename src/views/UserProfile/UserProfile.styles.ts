"use client"

import { styled } from '@mui/material/styles';
import { Card as MuiCard } from '@mui/material';

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(),
  maxWidth: 600,
  margin: theme.spacing(3, 0),
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const StyledNames = styled('div')(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

export const StyledUserInfo = styled('div')(({ theme }) => ({
  margin: theme.spacing(1, 0, 0),
  display: 'flex',
  alignItems: 'center',
}));
