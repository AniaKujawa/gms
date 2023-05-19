import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
    justifyContent: 'center',
    height: 'calc(100vh - 60px)',
  },
  loader: {
    animation: `$spin 2s linear infinite`,
    width: 100,
    marginBottom: theme.spacing(5),

    [theme.breakpoints.up('md')]: {
      width: 200,
    }
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }
}));
