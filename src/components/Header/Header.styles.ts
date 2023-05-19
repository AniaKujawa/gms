import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 60,
      padding: theme.spacing(1, 4),
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.black.main,
      position: 'sticky',
      top: 0,
      zIndex: 2,
    },
    menu: {
      columnGap: theme.spacing(2),
      width: 'auto',
    },
    languageToggle: {
      cursor: 'pointer',
      width: 30,
    }
  }),
);
