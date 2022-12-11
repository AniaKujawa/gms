import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    margin:'auto',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    cursor: 'pointer',
  },
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  arrow: {
   color: theme.palette.secondary.main,
  },
}));
