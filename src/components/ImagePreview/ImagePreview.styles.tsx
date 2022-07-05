import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexDirection: 'column',
    },
    img: {
      maxWidth: 400,
      height: 'auto',
    },
    btn: {
      alignSelf: 'end',
    }
  }),
);
