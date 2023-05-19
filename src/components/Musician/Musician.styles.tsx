import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2.5),
    },
    card: {
      padding: theme.spacing(2.5),
      margin: theme.spacing(2.5),
      cursor: 'pointer',
    },
    image: {
      margin: `${theme.spacing(1.5)}px 0px`,
    },
    description: {
      marginBottom: theme.spacing(1.5),
    },
    slider: {
      margin: theme.spacing(3, 0, 6),
    },
  }),
);
