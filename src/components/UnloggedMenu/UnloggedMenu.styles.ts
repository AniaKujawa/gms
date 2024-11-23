"use client"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const LeftButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));