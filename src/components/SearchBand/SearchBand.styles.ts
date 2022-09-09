import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    minWidth: '100%',
    padding: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },

    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.white.main,
    }
  }
}));
