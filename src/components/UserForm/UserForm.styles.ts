import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
}));