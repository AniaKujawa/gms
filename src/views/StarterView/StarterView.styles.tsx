import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(4)}px 0`,
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    },
    card: {
      padding: theme.spacing(4)
    },
    link: {
      color: '#FFF',
      textDecoration: 'none',
      cursor: 'pointer',
    }
  }),
);
