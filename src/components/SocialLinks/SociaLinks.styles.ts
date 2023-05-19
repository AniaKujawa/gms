import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>(theme => ({
  link: {
    margin: theme.spacing(2, 2, 0, 0),
    width: 24,
    height: 24,
    color: theme.palette.primary.light,
  },
}));
