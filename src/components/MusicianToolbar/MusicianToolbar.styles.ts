import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Props = {
  active: boolean;
};

export const useStyles = makeStyles<Theme, Props>(theme => ({
  activationBtn: {
    borderColor: props =>  props.active ? theme.palette.danger.main : theme.palette.success.main,
    color: props =>  props.active ? theme.palette.danger.main : theme.palette.success.main,
    marginRight: theme.spacing(2),
  },
  deactivationBtn: {
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
