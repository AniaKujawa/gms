import { createTheme } from '@material-ui/core';
import typography from './typography';
import breakpoints from './breakpoints';
import palette from './palette';

export const theme = createTheme({
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        '@media (min-width: 1280px)': {
          maxWidth: 1400,
        },
      },
    },
    MuiButton: {
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
}, {
  typography,
  breakpoints,
  palette,
});
