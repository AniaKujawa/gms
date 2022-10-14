import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>(theme => ({
  deletingBtn: {
    backgroundColor: theme.palette.danger.main,
    color: theme.palette.white.main,
    marginLeft: theme.spacing(2),

    '&:hover': {
      backgroundColor: theme.palette.danger.light,
    },
  },
  modalActions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
