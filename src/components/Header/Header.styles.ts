"use client"

import { styled } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 60,
  padding: theme.spacing(1, 4),
  justifyContent: 'space-between',
  alignItems: 'center', 
  backgroundColor: theme.palette.black.main,
  position: 'sticky',
  top: 0,
  zIndex: 2,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  columnGap: theme.spacing(2),
  width: 'auto',
}));

export const StyledLanguageToggle = styled('img')({
  cursor: 'pointer',
  width: 30,
});

