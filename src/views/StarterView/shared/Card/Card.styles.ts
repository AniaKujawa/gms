import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));