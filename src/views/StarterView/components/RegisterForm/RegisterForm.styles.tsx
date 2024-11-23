"use client"

import { styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap', 
  flexDirection: 'column',
  maxWidth: theme.spacing(40),
  margin: 'auto',
}));

export const StyledLink = styled('a')({
  cursor: 'pointer',
});

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  marginTop: theme.spacing(),
}));

