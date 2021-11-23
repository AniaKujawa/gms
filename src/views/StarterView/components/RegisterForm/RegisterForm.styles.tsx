import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      maxWidth: theme.spacing(40),
      margin: 'auto',
    },
    link: {
      cursor: 'pointer',
    },
  }),
);
