import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
