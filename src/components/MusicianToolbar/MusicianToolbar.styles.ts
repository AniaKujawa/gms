"use client"
import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

type Props = {
  active: boolean;
}

export const StyledActivationButton = styled(Button)<Props>(({ theme, active }) => ({
  borderColor: active ? theme.palette.danger.main : theme.palette.success.main,
  color: active ? theme.palette.danger.main : theme.palette.success.main,
  marginRight: theme.spacing(2),
}));

export const StyledDeactivationButton = styled(Button)(({ theme }) => ({
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