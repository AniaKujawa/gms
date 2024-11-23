"use client"
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

export const StyledList = styled('ul')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
  margin: 0,
  rowGap: theme.spacing(1.5),
  justifyContent: 'center',
  padding: theme.spacing(1, 2),
}));
