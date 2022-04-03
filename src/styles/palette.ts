declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    red: Palette['primary'];
    danger: Palette['primary'];
  }
  interface PaletteOptions {
    red: PaletteOptions['primary'];
    danger: PaletteOptions['primary'];
  }
};

export default {
  black: {
    main: '#333',
    dark: '#000',
  },
  white: {
    main: '#fff',
  },
  primary: {
    main: '#3B2621',
    light: '#a18984',
  },
  secondary: {
    main: '#FCFAFA',
  },
  red: {
    light: '#C0726D',
  },
  danger: {
    main: '#C70039',
  },
  success: {
    main: '#3D794D',
  },
};
