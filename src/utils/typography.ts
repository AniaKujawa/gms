import breakpoints from "./breakpoints";

const baseFontFamily = 'Lato';

export default {
  h1: {
    fontSize: 52,
    fontFamily: baseFontFamily,
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 26,
    },
  },
  h2: {
    fontSize: 32,
    fontFamily: baseFontFamily,
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 20,
    },
  },
  h3: {
    fontSize: 20,
    fontFamily: baseFontFamily,
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 16,
    },
  },
  body1: {
    fontSize: 14,
    fontFamily: baseFontFamily,
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 12,
    },
  },
  body2: {
    fontSize: 12,
    fontFamily: baseFontFamily,
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 10,
    },
  },
  italic1: {
    fontSize: 14,
    fontFamily: baseFontFamily,
    fontWeight: 400,
    fontStyle: 'italic',
    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 12,
    },
  },
};
