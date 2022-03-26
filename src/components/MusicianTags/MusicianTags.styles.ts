import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      marginRight: theme.spacing(0.5),
    },
  }),
);