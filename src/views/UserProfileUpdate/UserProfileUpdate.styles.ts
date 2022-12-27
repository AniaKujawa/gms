import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(),
    maxWidth: 600,
    margin: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  names: {
    margin: theme.spacing(1, 0),
  },
  userInfo: {
    margin: theme.spacing(1, 0, 0),
    display: 'flex',
    alignItems: 'center',
  },
}));
