import { makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles<Theme>(theme => ({
  list: {
    display: 'flex',
    listStyle: 'none',
    margin: theme.spacing(1, 0),
  },
}));
