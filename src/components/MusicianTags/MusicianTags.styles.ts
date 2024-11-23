"use client"

import { styled } from '@mui/material/styles';
import { Chip } from '@mui/material';

export const StyledTag = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));