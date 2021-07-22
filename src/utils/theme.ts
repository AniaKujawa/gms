import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
