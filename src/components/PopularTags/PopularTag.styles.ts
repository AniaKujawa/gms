import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  selected: boolean;
}

export const useStyles = makeStyles<Theme, Props>(theme => ({
  element: {
    '& .MuiButton-root': {
      color: props => !props.selected ? theme.palette.black.main : theme.palette.white.main,
      marginRight: theme.spacing(2),
    }
  }
}));
