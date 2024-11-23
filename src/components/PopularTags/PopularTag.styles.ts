"use client";
import { styled } from '@mui/material/styles';

interface Props {
  selected: boolean;
}

export const StyledLiElement = styled('li')<Props>(({ theme, selected }) => ({
  '& .MuiButton-root': {
    color: !selected ? theme.palette.black.main : theme.palette.white.main,
    marginRight: theme.spacing(2),
  }
}));
