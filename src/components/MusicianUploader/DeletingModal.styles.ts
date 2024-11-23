"use client"
import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

export const StyledDeletingButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.danger.main,
  color: theme.palette.white.main,
  marginLeft: theme.spacing(2),

  '&:hover': {
    backgroundColor: theme.palette.danger.light,
  },
}));

export const StyledModalActionsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex', 
  justifyContent: 'flex-end',
}));
