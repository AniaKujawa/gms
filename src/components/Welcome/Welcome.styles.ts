"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const bcg = '/images/bcg.jpg';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bcg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
}));
