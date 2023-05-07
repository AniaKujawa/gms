import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>(theme => ({
  link: {
    marginRight: theme.spacing(),
    width: 16,
    height: 16,
    color: theme.palette.primary.light,
  },
}));
