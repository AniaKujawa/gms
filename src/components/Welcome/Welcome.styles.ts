import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from '../../styles/theme';

const bcg = '/images/bcg.jpg';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${bcg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2.5),
    },
  }),
);
