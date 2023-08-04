import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: theme.spacing(5),
      marginTop: theme.spacing(),
      // backgroundColor: theme.palette.red.light,
      maxWidth: 400,
      textAlign: 'center',

      '& a:hover': {
        textDecoration: 'underline',
      }
    },
  }),
);