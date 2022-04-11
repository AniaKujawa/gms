import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.white.main,
    padding: theme.spacing(3),
  },
}));
