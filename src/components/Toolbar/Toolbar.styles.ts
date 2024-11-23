"use client"

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(2.5),
  width: 'initial',
}));