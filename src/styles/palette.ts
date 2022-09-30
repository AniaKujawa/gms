declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    red: Palette['primary'];
    danger: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    red: PaletteOptions['primary'];
    danger: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
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
    hover: '#F3EED9'
  },
  red: {
    light: '#C0726D',
  },
  danger: {
    main: '#C70039',
    light: '#eb0e4d',
  },
  success: {
    main: '#3D794D',
  },
};
