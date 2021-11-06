import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      height: 60,
      padding: theme.spacing(1, 4),
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.black.main,
      position: 'sticky',
      top: 0,
    },
  }),
);
