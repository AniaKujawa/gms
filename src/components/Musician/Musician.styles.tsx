"use client"

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Grid } from '@material-ui/core';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2.5),
  margin: theme.spacing(2.5),
  cursor: 'pointer',
}));

export const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

export const StyledImage = styled(Grid)(({ theme }) => ({
  margin: `${theme.spacing(1.5)} 0px`,
}));

export const StyledDescription = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

export const StyledSlider = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(3, 0, 6),
}));
