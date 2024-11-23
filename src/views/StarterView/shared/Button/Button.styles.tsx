"use client"

import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(5, 2),
  
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
