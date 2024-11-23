"use client"
import { createTheme } from '@mui/material/styles';
import typography from './typography';
import breakpoints from './breakpoints';
import palette from './palette';

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '@media (min-width: 1280px)': {
            maxWidth: 1400,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&:hover': {
            backgroundColor: palette.primary.light,
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: palette.secondary.hover,
          },
        },
      },
    },
  },
  typography,
  breakpoints,
  palette,
});
