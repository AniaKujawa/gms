import { makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles<Theme>(theme => ({
  list: {
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap',
    margin: 0,
    rowGap: theme.spacing(1.5),
    justifyContent: 'center',
    padding: theme.spacing(1, 2),
  },
}));
