import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  buttons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submitBtn: {
    marginLeft: theme.spacing(),
  }
}));